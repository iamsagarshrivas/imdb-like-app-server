var fs = require('fs');
var path = require('path');
var base64ToImage = require('base64-to-image');
var { moviePosterLocation } = require('../../config');
var { MoviesModel } = require('../../models')
module.exports = {
	addMovie:async ({movieName, releaseYear, plot, poster, cast})=>{
		try{
			let newMovie = new MoviesModel({
				movieName : movieName || null,
				releaseYear : releaseYear || null,
				plot : plot || null,
				poster : poster || null,
				cast: cast.map(item=>{
					return item['_id'];
				}) || null
			}) 

			return await newMovie.save();
		}catch(error){
			console.log(error);
			throw error
		}

	},
	updateMovie: async({_id, movieName, releaseYear, plot, cast})=>{
		try{
			await MoviesModel.findByIdAndUpdate(_id,
				{ 
					movieName : movieName,
					releaseYear : releaseYear,
					plot : plot,
					cast : cast
				}
			)
		}catch(error){
			console.log(error);
			throw error
		}
	},
	findAllMovies: async (query = {})=>{
		try{
			return await MoviesModel.aggregate([{
				$lookup:{
					from:'actors',
					localField:'cast',
					foreignField:'_id',
					as:'cast'
				}
			}]);
		}catch(error){
			console.log(error);
			throw error			
		}
	},
	convertBase64ToImage:({file, movieName, releaseYear} )=>{
		try{
			var fileName = `${movieName}-${releaseYear}-${Math.random().toString(36).substring(7)}.${file.substring("data:image/".length, file.indexOf(";base64"))}`
			var base64Str = file;
			var optionalObj = {'fileName': fileName, 'type': file.substring("data:image/".length, file.indexOf(";base64"))};

    		base64ToImage(base64Str, moviePosterLocation, optionalObj); 

			return fileName;
		}catch(error){
			console.log(error);
			throw error;
		}
	},
	getPosterFile:async (fileName)=>{
		try{
			return await path.join(moviePosterLocation,fileName);
		}catch(error){
			console.log(error);
			throw error;
		}
	}
}