import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import path from "path";

export default defineConfig({
  root: process.cwd(),
  plugins: [
    nunjucks({
      templatesDir: path.resolve(process.cwd(), "templates"),
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        version: path.resolve(__dirname, "version.html"),
      },
    },
  },
});
