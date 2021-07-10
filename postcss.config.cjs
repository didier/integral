const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	plugins: [
		nested(),
		autoprefixer(),

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
}

module.exports = config
