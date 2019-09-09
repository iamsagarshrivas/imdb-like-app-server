var mongoose = require('mongoose');

var actorSchema = mongoose.Schema({
	actorName:{
		type : String,
		required : true
	},
	gender :{
		enum:['male','female','others'],
		type:String,
		required : true
	},
	dob:{
		type:Date,
		required:true
	},
	bio:{
		type:String
	}
},{
	timestamps:true
});

module.exports = mongoose.model('actor',actorSchema);