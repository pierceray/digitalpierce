/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  basePath: "",
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
  },
};
