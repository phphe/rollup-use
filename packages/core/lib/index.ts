import fs = require("fs");
import glob = require("glob");
import zlib = require("zlib");

export function report(
  dir: string = "dist",
  extensions: string[] = [".js", ".css"]
) {
  const report = {};
  dir = dir.replace(/(\\|\/)$/, "");
  const filePaths: string[] = glob.sync(`${dir}/**/*`);
  for (const filePath of filePaths) {
    if (extensions.find((v) => filePath.endsWith(v))) {
      const code = fs.readFileSync(filePath);
      const size = getSize(code);
      const sizeGzipped = getSize(zlib.gzipSync(code));
      report[filePath] = { size, sizeGzipped };
    }
  }
  console.table(report);
  return report;
}

export function getSize(code: string | Buffer) {
  return (code.length / 1024).toFixed(2) + " KiB";
}

export function resolveUMDDependencies(pkg: any): string[] {
  return [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];
}

export function resolveAllDependencies(pkg: any): string[] {
  return [
    ...resolveUMDDependencies(pkg),
    ...Object.keys(pkg.dependencies || {}),
  ];
}

export function belongsTo(
  source: string,
  dependencePatterns: (RegExp | string)[]
) {
  for (const pattern of dependencePatterns) {
    if (pattern instanceof RegExp) {
      if (pattern.test(source)) {
        return true;
      }
    } else {
      if (pattern === source) {
        return true;
      }
      let t = pattern.replace(/^(\/|\\)/, "").replace(/(\/|\\)$/, "");
      let reg = new RegExp(`^(.*?[/\\\\])?${t}([/\\\\].*?)?$`);
      if (reg.test(source)) {
        return true;
      }
    }
  }
}

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/-/g, "");
}

export function resolveOutputName(pkgName: string) {
  if (pkgName.includes("/")) {
    // like '@babel/core', remove '@babel/'
    let t = pkgName.split("/");
    pkgName = t[t.length - 1];
  }
  return pkgName;
}

export function resolveModuleName(pkgName: string) {
  return camelize(resolveOutputName(pkgName));
}
