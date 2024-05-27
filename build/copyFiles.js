import { fileURLToPath } from "url";
import { resolve, dirname, join } from "path";
import * as fs from "fs";

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = dirname(__filenameNew);
const projRoot = resolve(__dirnameNew, "..");

const pkgRoot = resolve(projRoot, "packages");
const epRoot = resolve(pkgRoot, "zxl-ui");
const epPackage = resolve(epRoot, "package.json");

/** `/dist` */
const buildOutput = resolve(projRoot, "dist");
/** `/dist/zxl-ui` */
const epOutput = resolve(buildOutput, "zxl-ui");

const copyFiles = () => {
  fs.copyFileSync(epPackage, join(epOutput, "package.json"));
};

copyFiles();
