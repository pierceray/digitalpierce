module.exports = {
		options: {
			browsers: ['last 2 version', 'ie 8', 'ie 9']
		},
		dev: {
			expand: true,
			src: 'src/css/*.css',
			dest: '.'
		},
		dist: {
			expand: true,
			src: 'dist/css/*.css',
			dest: '.'
		}
	};
