import { defineConfig } from 'tsup';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), 'VITE_');

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  sourcemap: true,
  minify: true,
  target: 'esnext',
  outDir: 'dist',
  tsconfig: 'tsconfig.json',
  env: {
    VITE_FIREBASE_API_KEY: env.VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN: env.VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID: env.VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET: env.VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID: env.VITE_FIREBASE_APP_ID,
    VITE_FIREBASE_MEASUREMENT_ID: env.VITE_FIREBASE_MEASUREMENT_ID,
  },
});
