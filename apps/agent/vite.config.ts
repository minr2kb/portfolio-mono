import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import dtsConfig from './dts.config.json';
import exposes from './exposes.json';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootEnv = loadEnv(mode, path.resolve(__dirname, '../'), '');
  const localEnv = loadEnv(mode, process.cwd(), '');
  const env = { ...rootEnv, ...localEnv };

  return {
    base: env.VITE_AGENT_URL,
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: dtsConfig.name,
        filename: 'remoteEntry.js',
        exposes,
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    resolve: { tsconfigPaths: true },
    cacheDir: './.vite',
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
    server: { port: 5005 },
    preview: { port: 5005 },
  };
});
