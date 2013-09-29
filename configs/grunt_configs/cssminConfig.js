module.exports = {
	minify: {
		expand: true,
		cwd: "src/",
		src: [
			"css/*.css",
			"!*.min.css"
			],
		dest: "build/css/",
		ext: ".css"
	},
	options: {
		report: "min"
	}
};
