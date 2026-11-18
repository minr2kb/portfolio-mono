import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';

const assets = new URL('../dist/assets/', import.meta.url);
const files = readdirSync(assets);
const routesFile = files.find((file) => /^AppRoutes-.*\.js$/.test(file));

assert.ok(routesFile, 'AppRoutes remote bundle is missing');
assert.match(
  readFileSync(new URL('remoteEntry.js', assets), 'utf8'),
  /__federation_import\("(?:http:\/\/localhost:5005|https:\/\/portfolio-kbmin-agent\.web\.app)\/assets\//,
);
const routes = readFileSync(new URL(routesFile, assets), 'utf8');
assert.match(routes, /attachShadow/);
assert.match(routes, /:host/);
assert.ok(
  !files.some((file) => file.endsWith('.css')),
  'remote CSS escaped the bundle',
);

console.log('Agent remote bundle and isolated styles verified.');
