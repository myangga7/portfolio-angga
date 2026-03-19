import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Perhatikan ini berbeda!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin khusus Tailwind v4
  ],
});
