var path = require('path');
module.exports = {
	port : process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
	mongo: {
		options: {
		  db: {
			safe: true
		  }
		},
		uri: 'mongodb://localhost:27017/imdb-like-sample-app'
	},
	apiRoot: process.env.API_ROOT || '',
	ip: process.env.IP || '0.0.0.0',
	seed : false,
	moviePosterLocation : path.join(__dirname, '../public/')
}