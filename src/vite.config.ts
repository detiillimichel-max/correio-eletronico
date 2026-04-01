import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração básica do Vite para React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
