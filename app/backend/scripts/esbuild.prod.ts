import { build } from "esbuild";
import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";

const main = async () => {
  await build({
    plugins: [pnpPlugin()],
    entryPoints: ["server/index.ts"],
    bundle: true,
    minify: true,
    outfile: "build/index.js",
    platform: "node",
  }).catch((err) => {
    console.log(err);
  });
};
main();
