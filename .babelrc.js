module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false, // default ES module
			},
		],
		'@babel/preset-typescript',
	],
	// plugins: ['@babel/plugin-proposal-class-properties'],
}
