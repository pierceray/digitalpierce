module.exports = {
	options: {
		sourceMap: true
	},
	dev:{
		files: {
			'src/css/main.css': 'src/sass/main.scss'
		}
	},
	dist: {
		files: {
			'dist/css/main.css': 'src/sass/main.scss'
		}
	}
};
