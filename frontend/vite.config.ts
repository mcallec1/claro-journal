import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  resolve: {
    alias: {
      'src/': path.resolve(__dirname, 'src')
    }
  }
})
