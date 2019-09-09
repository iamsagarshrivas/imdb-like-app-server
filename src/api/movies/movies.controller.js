var { convertBase64ToImage, addMovie, findAllMovies, getPosterFile, updateMovie }= require('./movies.service')
module.exports = {
	editMovie:async ({body},res)=>{
		try{
			await updateMovie(body);
			res.json({error:false,message:'Movie Updated.'});

		}catch(error){
			console.log(error);	
			res.json({error: true, message:"Something went wrong."})
		}
	},
	addMovie:async ({body},res)=>{
		try{
			var fileName = await convertBase64ToImage(body);
			body['poster'] = fileName;
			await addMovie(body);
			res.json({error:false,message:'Movie added.'});
		}catch(error){
			console.log(error);			
			res.json({error: true, message:"Something went wrong."})
		}
	},
	findAllMovies: async ( {query },res)=>{
		try{
			let movieList = await findAllMovies();
			res.json({error: false, list : movieList})
		}catch(error){
			console.log(error);			
			res.json({error: true, message:"Something went wrong."})
		}
	},
	getFile: async( {params },res)=>{
		try{
			let filepath = await getPosterFile(params.filename);
			res.sendFile(filepath);
		}catch(error){
			console.log(error);
			res.json({error: true, message:"Something went wrong."})			
		}
	}
}