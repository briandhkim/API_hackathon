var movie = {};


function grabMoviesFromDataBase(){
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
			var shadowDom = new DOMParser().parseFromString(serverData, "text/html");
            var movieElements = $(shadowDom).find('.iw-container');
            movieElements.each(function(){
       			var holdMovieTitle = $(this).find('.title')[0];
            	movie.title = $(holdMovieTitle).text();
            	movie.image = $(this).find('.iw-boxart').attr('src');
            	var holdLink = $(this).find('.action-play')[0]; 
            	movie.link = $(holdLink).attr('href');
            	movie.rating = $(this).find('.average_rating').text();
            	var holdMovieSynopsis = $(this).find('.synopsis')[0];
            	movie.synopsis = $(holdMovieSynopsis).text();

            
            });
            console.log(movie);
            render();	
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}

// function random(){
// 	var randomIndex = Math.floor(Math.random() * movieList.length);
// 	// var imgTag = $('<img>').attr('src', movieList[randomIndex].image).css('height', '10em');
// 	// var movieButton = $('<button>').text('Play');
// 	var appendMovieLink = $('<a>').attr('href', movieList[randomIndex].link).text('Play').addClass('btn');
// 	// movieButton.append(appendMovieLink);
// 	$('.display_movie_title').append(movieList[randomIndex].title);
// 	// $('.display_movie_poster').append(imgTag);
// 	$('.display_movie_button').append(appendMovieLink);
// 	$('.netflixMoviePoster').attr('src', movieList[randomIndex].image)
// }

function render(){ 
	var setDecimalForMovieRating = parseFloat(movie.rating);
	$('.netflixTitleSpan').text(movie.title);
	$('.netflixMoviePoster').attr('src', movie.image);
	$('.sendToNetflix').attr('href', movie.link);
	$('.netflixSummary').text(movie.synopsis);
	$('.netflixRating').text(setDecimalForMovieRating.toFixed(1));
}















function rouletteSuccess(dat){
	console.log(dat);
}
function rouletteFail(dat){
	console.log(dat);
}

