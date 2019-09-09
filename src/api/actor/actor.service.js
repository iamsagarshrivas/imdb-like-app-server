var mongoose = require('mongoose');
var { ActorModel } = require('../../models');

module.exports={
	addActor : async (data)=>{
		try{
			let newActor = new ActorModel(data);
			await newActor.save();
		}
		catch(error){
			console.log(error);
			throw error
		}
	},

	findOne: async (query)=>{
		try{
			let actor = await ActorModel.findOne(query);
			return actor;
		}catch(error){
			console.log(error);
			throw error
		}
	},

	find: async (query={})=>{
		try{
			let actorList = await ActorModel.find(query);
			return actorList;
		}catch(error){
			console.log(error);
			throw error
		}
	}
}

