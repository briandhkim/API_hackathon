
var movie = {}
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
            var movieElements = $(shadowDom).find('.title-detail-top');
            	movie.title = $(this).find('.title').text();
            	movie.image = $(this).find('.iw-boxart').attr('src');
            	// movie.genre = $(this).find('.genres').text();
            	// movieList.push(movie);
          
            console.log(shadowDom);
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}

function random(){

	var imgTag = $('<img>').attr('src', movie.image);
	$('.display_movie_title').append(movie.title);
	$('.display_movie_poster').append(imgTag);

}












function rouletteSuccess(dat){
	console.log(dat);
}
function rouletteFail(dat){
	console.log(dat);
}

