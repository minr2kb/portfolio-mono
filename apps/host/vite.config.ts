import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootEnv = loadEnv(mode, path.resolve(__dirname, '../'), '');
  const localEnv = loadEnv(mode, process.cwd(), '');

  const env = { ...rootEnv, ...localEnv };
  return {
    base: env.VITE_HOST_URL,
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          v1: `${env.VITE_V1_URL}/assets/remoteEntry.js`,
          v2: `${env.VITE_V2_URL}/assets/remoteEntry.js`,
          v3: `${env.VITE_V3_URL}/assets/remoteEntry.js`,
          //   v4: `${env.VITE_V4_URL}/assets/remoteEntry.js`,
        },
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    server: {
      port: 1129,
      open: true,
    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
    resolve: {
      alias: [{ find: '@', replacement: __dirname + '/src' }],
    },
  };
});
