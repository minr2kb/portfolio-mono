import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import exposes from './exposes.json';
import dtsConfig from './dts.config.json';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootEnv = loadEnv(mode, path.resolve(__dirname, '../'), '');
  const localEnv = loadEnv(mode, process.cwd(), '');
  const env = { ...rootEnv, ...localEnv };
  return {
    base: env.VITE_V2_URL,
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
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: true,
      cssCodeSplit: false,
    },
    server: { port: 5002 },
    preview: { port: 5002 },
  };
});
