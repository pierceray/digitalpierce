module.exports = {
	main: {
		expand: true,     // Enable dynamic expansion.
		cwd: "src/js/",      // Src matches are relative to this path.
		src: ["**/*.js"], // Actual pattern(s) to match.
		dest: "build/js/",   // Destination path prefix.
		ext: ".js"   // Dest filepaths will have this extension.
	}
};
