import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for 'src' directory
    },
  },

  // To define environment variables
  define: {
    'process.env': {
      // Define environment variables if needed
    },
  },
  
  build: {
    // Build optimization settings
    rollupOptions: {
      // Externalize dependencies
      external: ['react', 'react-dom'],
      output: {
        // Adjust output options if necessary
        assetFileNames: 'assets/[name].[hash].[ext]', // Custom naming for assets
      },
    },
    // Minify the output
    minify: 'terser',
  },
  
  server: {
    // Server configuration
    port: 3000, // Port to run the dev server
    open: true, // Open the browser on server start
    watch: {
      // Configure Vite to watch for changes in specific directories
      usePolling: true,
    },
  },
  
  // Additional configuration for static assets
  publicDir: 'public', // Specify the public directory if you have static assets
});
