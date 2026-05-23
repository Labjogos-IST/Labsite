import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Output to Hugo's theme static directory
    outDir: 'static/css',
    // Clear only the output directory on initial launch
    emptyOutDir: true,
    // Don't copy public directory
    copyPublicDir: false,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'assets/css/main.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return mode === 'development' ? '[name].[ext]' : '[name].[hash].[ext]'
          }
          return mode === 'development' ? '[name].[ext]' : '[name].[hash].[ext]'
        },
        // Keeps names matching for any JS elements generated
        entryFileNames: () => {
          return mode === 'development' ? '[name].js' : '[name].[hash].js'
        }
      }
    },
    // Only generate manifest in production
    manifest: mode === 'production',
    // Handled by package.json scripts instead
    watch: null,
  },
  // For development hot reloading
  server: {
    port: 5173,
    hmr: {
      port: 5173,
    },
    watch: {
      // Ignore output directories in dev server to prevent infinite loops
      ignored: ['**/static/css/**', '**/public/**']
    }
  }
}))
