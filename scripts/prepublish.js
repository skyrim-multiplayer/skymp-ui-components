const fs = require("fs");

const DIST_PATH = "dist/";
const README_PATH = "README.md";

const PATH_TO = DIST_PATH + README_PATH;

const copyReadmeIntoDistFolder = () => {
  if (!fs.existsSync(README_PATH)) {
    throw new Error("README.md does not exist");
  } else {
    fs.copyFileSync(README_PATH, PATH_TO);
  }
};

copyReadmeIntoDistFolder();
