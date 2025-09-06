import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "https://react-ecommerce-project-pre-recorde.vercel.app/", // Replace with your actual API server URL
        changeOrigin: true,
        secure: false,
      },
    },

  },
});
