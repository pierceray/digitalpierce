const path = require("path");

module.exports = {
  output: "export",
  basePath: "",
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
  },
};
