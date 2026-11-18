import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(
  new URL('../src/lib/demo-chat.ts', import.meta.url),
  'utf8',
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { appendTurn, FIXED_REPLY, nextStreamChunk, PREPARATION_STEP_MS } =
  await import(`data:text/javascript,${encodeURIComponent(compiled)}`);

assert.ok(
  PREPARATION_STEP_MS * 2 >= 1000 && PREPARATION_STEP_MS * 2 <= 1500,
  'two visible preparation steps take about 1–1.5 seconds',
);

assert.equal(appendTurn([], ' \n ', 1), null, 'blank questions stay unsent');

const first = appendTurn([], '  첫 질문  ', 1);
assert.ok(first);
assert.deepEqual(first.messages, [
  { id: 1, role: 'user', text: '첫 질문' },
  { id: 2, role: 'assistant', text: '' },
]);

let visible = '';
let ticks = 0;
while (visible !== FIXED_REPLY) {
  const next = nextStreamChunk(FIXED_REPLY, visible);
  assert.ok(next.startsWith(visible), 'streaming only appends text');
  assert.ok(next.length > visible.length, 'streaming advances each tick');
  visible = next;
  ticks += 1;
  assert.ok(ticks < 200, 'streaming eventually completes');
}
assert.equal(visible, FIXED_REPLY);
assert.equal(nextStreamChunk('😀가', '', 1), '😀');

const second = appendTurn(first.messages, '다음 질문', 3);
assert.ok(second);
assert.equal(second.messages.length, 4);
assert.equal(second.assistantId, 4);
assert.deepEqual(second.messages.slice(0, 2), first.messages);

console.log('Demo chat state and streaming checks passed.');
