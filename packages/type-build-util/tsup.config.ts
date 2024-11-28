import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  format: ['cjs'],
  target: 'esnext',
  outDir: 'dist',
  tsconfig: 'tsconfig.json',
});
