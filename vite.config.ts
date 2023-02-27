import legacy from "@vitejs/plugin-legacy";
import fs from "fs";
import { ConfigEnv, UserConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import viteImagemin from "vite-plugin-imagemin";

const config: (configEnv: ConfigEnv) => UserConfig = ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    outDir: "./web/dist",
    emptyOutDir: true,

    // generate manifest.json in outDir
    manifest: true,

    rollupOptions: {
      // overwrite default .html entry point
      input: "/assets/js/main.ts",
    },
  },
  server: {
    host: "localhost",
    port: 2170,
    https: {
      key: fs.readFileSync("../../../.cert/key.pem"),
      cert: fs.readFileSync("../../../.cert/cert.pem"),
    },
    strictPort: true,
    hmr: {
      host: "localhost",
      port: 2170,
    },
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    FullReload(["templates/**/*"]),
    viteImagemin({
      gifsicle: {
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 5,
      },
      webp: {
        quality: 85,
      },
      mozjpeg: {
        quality: 85,
        progressive: true,
        arithmetic: false,
      },
      pngquant: {
        quality: [0.75, 0.9],
        speed: 4,
      },
      svgo: false,
    }),
  ],
});

export default config;
