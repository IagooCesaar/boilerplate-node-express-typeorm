/* eslint-disable no-restricted-syntax */

import { convertGlobPaths } from "@utils/convertGlobPaths";
import { deepMerge } from "@utils/deepMerge";

const docFiles = [
  "./src/docs/*.doc.ts",
  "./src/docs/**/*.doc.ts",
  "./src/modules/**/*.doc.ts",
];

const makeDoc = async () => {
  const doc = {};
  for await (const filePath of convertGlobPaths(docFiles)) {
    import(filePath.replace("./src/", "../")).then((docFile) => {
      deepMerge(doc, docFile);
    });
  }
  return doc;
};

export default makeDoc();
