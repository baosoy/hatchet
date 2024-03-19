import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  platform: "node",
});
