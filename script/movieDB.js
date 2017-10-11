var lowestRating = 0;
var highestRating = 9;
var releaseMin = "2001-01-05";
var releaseMax = "2017-01-02";
var genres = "";

function getGenreList(){
	var promise = {
		then: function(resolve, reject){
			this.resolve = resolve;
			this.reject = reject;
		}
	};
	$.ajax({
		url: "https://api.themoviedb.org/3/genre/movie/list",
		datatype: 'json',
		method: 'get',
		data:{
			'api_key': '35b9c1bde49e80845af170911910cbb0'
		},
		success: function(genreData){
			promise.resolve(genreData);
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}
function genrePullSuccess(genres){
	console.log(genres.genres);
	// genres.genres returns index of objects
			// e.g. - id: 12, name: 'action'
	for (var idx in genres.genres){
		var opt = $('<option>',{
			value : ''+ genres.genres[idx].id,
			text : genres.genres[idx].name
		});
		$('#genreSelect').append(opt);
	}
	for (var i=0; i<11; i++){
		var rng = $('<option>',{
			value : ''+i,
			text: i
		});
		$('#minMovieRange, #maxMovieRange').append(rng);
	}
}
function genrePullFail(err){
	console.log(err);
}

function getMovieDB(){
	var promise = {
		then: function(resolve, reject){
			this.resolve = resolve;
			this.reject = reject;
		}
	};
	// https://developers.themoviedb.org/3/discover		data documentation
	/*
		"release_date.gte"	input-e.g. (string) "2015-01-16"
			release date that is greater or equal to specified value
		"release_date.lte"	input-e.g. (string) "2016-01-16"
			release date that is less than or equal to specified value
		"primary_release_year" input-e.g. (int) 2015
		"with_genres" input-e.g. (string) Action , Adventure , Science Fiction
					likely only one at a time for genre
		"primary_release_year" input-e.g. (int) 2015
	*/ 
	$.ajax({
		url: 'https://api.themoviedb.org/3/discover/movie',
		datatype: 'json',
		method: 'get',
		data:{
			api_key: '35b9c1bde49e80845af170911910cbb0',
			// primary_release_year : 2015,	//year input
			'release_date.gte' : releaseMin,
			'release_date.lte' : releaseMax,
			'vote_average.gte' : lowestRating,			//lowest rating input
			'vote_average.lte' : highestRating,			//highest rating input
			'with_genres' : genres
		},
		success: function(movieData){
			promise.resolve(movieData);
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}
function movieDataSuccess(dataM){
	/*
		dataM.results  -->array of len20 contains movie data
		dataM.results[i].title --> movie title
		dataM.results[i].vote_average --> rating
		dataM.results[i].poster_path --> poster src
		dataM.results[i].genre_ids -->returns array of genre ids(numbers)
		dataM.results[i].overview --> brief summary
		dataM.results[i].backdrop_path --> background poster
		concat imgSrc to -- 'https://image.tmdb.org/t/p/w500'
	*/ 
	// console.log(dataM);
	var i = Math.floor(Math.random()*20);
	var movie = dataM.results[i];
	$('.movieDbPoster').attr('src', "https://image.tmdb.org/t/p/w500"+movie.poster_path);
	$('.movTitle').text(movie.title);
	$('.movieDBrating').text(movie.vote_average);
	$('.movieDbTitle').css('background-image', 'url("https://image.tmdb.org/t/p/w500'+movie.backdrop_path+'")');
}
function movieDataFail(err){
	console.log(err);
}

function movieDbButtonClick(){
	var minRating = $('#minMovieRange').val();	//returns null if nothing selected
	if(minRating!==null){
		lowestRating= parseInt(minRating);
	}
	var maxRating = $('#maxMovieRange').val();
	if(maxRating!==null){
		highestRating= parseInt(maxRating);
	}
	var genre = $('#genreSelect').val();	//returns null if nothing selected
	if(genre !== null){
		genres = genre;
	}
	var minYear = $('#minimumYear').val();	//returns undefined if nothing is in input
	if(minYear!==''){
		releaseMin = minYear+'-01-01';
	}
	var maxYear = $('#maximumYear').val();
	if(maxYear!==''){
		releaseMax = maxYear+'-12-31';
	}
	getMovieDB().then(movieDataSuccess,movieDataFail);
}