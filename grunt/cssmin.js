module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'dist/css',
			src: ['*.css', '!*.min.css'],
			dest: 'dist/css',
			ext: '.css'
		}]
	}
};
