import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from 'vite-tsconfig-paths';
import exposes from './exposes.json';
import dtsConfig from './dts.config.json';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootEnv = loadEnv(mode, path.resolve(__dirname, '../'), '');
  const localEnv = loadEnv(mode, process.cwd(), '');
  const env = { ...rootEnv, ...localEnv };

  return {
    base: env.YOUR_APP_URL,
    plugins: [
      react(),
      tsconfigPaths(),
      federation({
        name: dtsConfig.name,
        filename: 'remoteEntry.js',
        exposes,
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    cacheDir: './.vite',
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: 5000,
      fs: {
        allow: ['./public'],
      },
    },
    preview: { port: 5000 },
  };
});
