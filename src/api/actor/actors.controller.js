var ActorService = require('./actor.service')
module.exports = {
	addActor :async ({body},res)=>{
		try{
			await ActorService.addActor(body);
			res.json({error:false,message:"Actor Added."});
		}catch(error){
			res.json({error:true,message:"Something went wrong"});
		}
	},

	findActorList: async (req,res)=>{
		try{
			let actorList = await ActorService.find();
			res.json({ error: false, list: actorList})
		}
		catch(error){
			res.json({error:true,message:"Something went wrong"});
		}
	}
}