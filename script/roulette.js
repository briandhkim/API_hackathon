// function getRandMovieByRating(lowR,highR){
// 	var promise = {
// 		then: function(resolve, reject){
// 			this.resolve = resolve;
// 			this.reject = reject;
// 		}
// 	};
// 	$.ajax({
// 		url: 'https://netflixroulette.net/api/api.php',
// 		dataType: 'json',
// 		method: 'post',
// 		data: {
// 			'genre' : 'All',
// 			'movies': 'true',
// 			'tv' :'true',
// 			'lowrating': lowR,
// 			'highrating' : highR,
// 			'director' :'none',
// 			'actor' : 'none',
// 			'keyword' : 'none'
// 		},
// 		success: function(showData){
// 			promise.resolve(showData);
// 		},
// 		error: function(err){
// 			promise.resolve(err);
// 		}
// 	});
// 	return promise;
// }
//
// function rouletteSuccess(dat){
// 	console.log(dat);
// }
// function rouletteFail(dat){
// 	console.log(dat);
// }