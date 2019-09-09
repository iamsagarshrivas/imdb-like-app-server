var mongoose = require('mongoose')

var movieSchema = mongoose.Schema({
	movieName : {
		type: String,
		required: true
	},
	releaseYear:{
		type: Number,
		required: true
	},
	plot:{
		type: String
	},
	poster:{
		type: String
	},
	cast:[{type:mongoose.Schema.Types.ObjectId}]
},{
	timestamps:true
})

module.exports = mongoose.model('movie',movieSchema);