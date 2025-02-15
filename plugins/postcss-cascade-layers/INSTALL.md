# Installing PostCSS Cascade Layers

[PostCSS Cascade Layers] runs in all Node environments, with special instructions for:

- [Node](#node)
- [PostCSS CLI](#postcss-cli)
- [PostCSS Load Config](#postcss-load-config)
- [Webpack](#webpack)
- [Next.js](#nextjs)
- [Gulp](#gulp)
- [Grunt](#grunt)

⚠️ [PostCSS Cascade Layers] assumes to process your complete CSS bundle.<br>If your build tool processes files individually or in parallel the output will be incorrect.<br>Using [`postcss-import`](https://www.npmjs.com/package/postcss-import) and `@import` statements is one way to make sure your CSS is bundled before it is processed by this plugin.


## Node

Add [PostCSS Cascade Layers] to your project:

```bash
npm install postcss @csstools/postcss-cascade-layers --save-dev
```

Use it as a [PostCSS] plugin:

```js
// commonjs
const postcss = require('postcss');
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');

postcss([
	postcssCascadeLayers(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

```js
// esm
import postcss from 'postcss';
import postcssCascadeLayers from '@csstools/postcss-cascade-layers';

postcss([
	postcssCascadeLayers(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli @csstools/postcss-cascade-layers --save-dev
```

Use [PostCSS Cascade Layers] in your `postcss.config.js` configuration file:

```js
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');

module.exports = {
	plugins: [
		postcssCascadeLayers(/* pluginOptions */)
	]
}
```

## PostCSS Load Config

If your framework/CLI supports [`postcss-load-config`](https://github.com/postcss/postcss-load-config).

```bash
npm install @csstools/postcss-cascade-layers --save-dev
```

`package.json`:

```json
{
	"postcss": {
		"plugins": {
			"@csstools/postcss-cascade-layers": {}
		}
	}
}
```

`.postcssrc.json`:

```json
{
	"plugins": {
		"@csstools/postcss-cascade-layers": {}
	}
}
```

_See the [README of `postcss-load-config`](https://github.com/postcss/postcss-load-config#usage) for more usage options._

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader @csstools/postcss-cascade-layers --save-dev
```

Use [PostCSS Cascade Layers] in your Webpack configuration:

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									["postcss-import"],
									[
										"@csstools/postcss-cascade-layers",
										{
											// Options
										},
									],
								],
							},
						},
					},
				],
			},
		],
	},
};
```

## Next.js

Read the instructions on how to [customize the PostCSS configuration in Next.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config)

```bash
npm install @csstools/postcss-cascade-layers --save-dev
```

Use [PostCSS Cascade Layers] in your `postcss.config.json` file:

```json
{
	"plugins": [
		"@csstools/postcss-cascade-layers"
	]
}
```

```json5
{
	"plugins": [
		[
			"@csstools/postcss-cascade-layers",
			{
				// Optionally add plugin options
			}
		]
	]
}
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss @csstools/postcss-cascade-layers --save-dev
```

Use [PostCSS Cascade Layers] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');

gulp.task('css', function () {
	var plugins = [
		postcssCascadeLayers(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss @csstools/postcss-cascade-layers --save-dev
```

Use [PostCSS Cascade Layers] in your Gruntfile:

```js
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssCascadeLayers(/* pluginOptions */)
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Cascade Layers]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-cascade-layers
[Next.js]: https://nextjs.org
