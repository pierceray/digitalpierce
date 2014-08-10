module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'src',
			src: [
				'**/*.{html,png,jpg,gif,svg,js,ico}',
				'robots.txt',
				'CNAME'
			],
			dest: 'dist'
		}]
	}
};
