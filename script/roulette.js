var movie = {};

function grabMoviesFromDataBase(){ // Gets ajax call on "document.ready" and on click $('#netflixSpinButton')
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
            	//here take out the edit made to button spin
            });
            renderMovieInfoToDom();	
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}

function netflixRouletteButton(){
	gramMoviesFromDataBase();
	//add lines here for making button spin
}

function renderMovieInfoToDom(){ // Gets movie info and places them into DOM elements 
	var setDecimalForMovieRating = parseFloat(movie.rating);
	$('.netflixTitleSpan').text(movie.title);
	$('.netflixMoviePoster').attr('src', movie.image);
	$('.sendToNetflix').attr('href', movie.link); // Gives netflix url to button
	$('.netflixSummary').text(movie.synopsis);
	$('.netflixRating').text(setDecimalForMovieRating.toFixed(1));
}
