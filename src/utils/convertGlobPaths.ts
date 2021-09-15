import glob from "glob";

function convertGlobPaths(globs: ReadonlyArray<string>): string[] {
  return globs
    .map((globString) => glob.sync(globString))
    .reduce((previous, current) => previous.concat(current), []);
}

export { convertGlobPaths };
