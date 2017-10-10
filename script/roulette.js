
var movieList = [];

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
			var shadowDom = new DOMParser()
                .parseFromString(serverData, "text/html");
            var movieElements = $(shadowDom).find('.iw-title');
            // var movieList = [];
            movieElements.each(function(){
            	var movie = {}
            	movie.title = $(this).find('.title-link').text();
            	movie.image = $(this).find('.iw-boxart').attr('src');
            	movie.genre = $(this).find('.genres').text();
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

function random(){
	var randomIndex = Math.floor(Math.random() * movieList.length);
	var imgTag = $('<img>').attr('src', movieList[randomIndex].image).css('height', '100em');
	$('.display_movie_title').append(movieList[randomIndex].title);
	$('.display_movie_poster').append(imgTag);

}












function rouletteSuccess(dat){
	console.log(dat);
}
function rouletteFail(dat){
	console.log(dat);
}

