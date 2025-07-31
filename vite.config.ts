import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  base:"/",
=======
  base:'/',
>>>>>>> dadbe3805a9fe5c7c9d7b78ca7069a1bb4a917e6
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            // Add other large libraries here if needed
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set warning limit to 1000 kB
  },
}));
