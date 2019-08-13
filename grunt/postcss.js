module.exports = {
  options: {
    map: {
      inline: false, // save all sourcemaps as separate files...
      annotation: 'dist/css/maps/' // ...to the specified directory
    },

    processors: [
      require('pixrem')(), // add fallbacks for rem units
      require('autoprefixer')(), // add vendor prefixes
      require('cssnano')() // minify the result
    ]
  },
  dev: {
    src: 'src/css/*.css'
  },
  dist: {
    src: 'dist/css/*.css'
  }
};
