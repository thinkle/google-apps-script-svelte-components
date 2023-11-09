import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import typescript from "@rollup/plugin-typescript";
import path from "path";

export default defineConfig({
  plugins: [
    svelte(),
    typescript({ include: "./src/lib/icons/*.ts", outDir: "./dist/icons" }),
  ],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "google-apps-script-svelte-components",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        globals: {
          svelte: "svelte",
        },
      },
    },
  },
});
