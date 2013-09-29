module.exports = {
	main:{
		files:[{
			expand: true,
			cwd: "src",
			src: [
				"**",
				"!sass/**"
			],
			dest: "build/"
		}]
	}
};
