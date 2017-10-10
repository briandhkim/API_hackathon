<<<<<<< HEAD
function getRandMovieByRating(){
	var promise = {
		then: function(resolve, reject){
			this.resolve = resolve;
			this.reject = reject;
		}
	};
	$.ajax({
		url: 'http://localhost:8888/C9.17_hackathon2/server/getCurrentMovies.php',
		dataType: 'text',
		method: 'get',
		success: function(serverData){
			var shadowDom = new DOMParser()
                .parseFromString(serverData, "text/html");
            var movieElements = $(shadowDom).find('.iw-title');
            var movieList = [];
            movieElements.each(function(){
            	var movie = {}
            	movie.title = $(this).find('.title-link').text();
            	movieList.push(movie);
            });
            console.log(movieList);
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}

function rouletteSuccess(dat){
	console.log(dat);
}
function rouletteFail(dat){
	console.log(dat);
}
=======
>>>>>>> 7c7dedf8aca4271f36f4f07dbff59b77a60959d6
