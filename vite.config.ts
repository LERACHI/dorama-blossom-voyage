// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// O defineConfig recebe a configuração do ambiente (como 'mode')
export default defineConfig(({ mode }) => ({
  
  // ✅ CORREÇÃO CHAVE PARA O GITHUB PAGES:
  // Define o caminho base como o nome do seu repositório para o carregamento correto dos assets.
  base: '/dorama-blossom-voyage/', 
  
  server: {
    host: "::",
    port: 8080,
  },
  
  // Mantém a lógica condicional dos plugins usando o 'mode'
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
