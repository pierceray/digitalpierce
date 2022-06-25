/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  basePath: "",
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
  },
  headers: async () => [
    {
      source: "/:all*(js)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=3600, stale-while-revalidate",
        },
      ],
    },
  ],
};
