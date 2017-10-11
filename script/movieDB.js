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
			'api_key': '35b9c1bde49e80845af170911910cbb0',
			// primary_release_year : 2015,	//year input
			'release_date.gte' : '2001-01-16',
			'release_date.lte' : '2003-01-16',
			'vote_average.gte' : 3,			//lowest rating input
			'vote_average.lte' : 5			//highest rating input
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
	console.log(dataM);
}
function movieDataFail(err){
	console.log(err);
}


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


function movieDbButtonClick(){
	var minRating = $('#minMovieRange').val();	//returns null if nothing selected
	var maxRating = $('#maxMovieRange').val();
	var genre = $('#genreSelect').val();	//returns null if nothing selected
	var minYear = $('#minimumYear').val();	//returns undefined if nothing is in input
	var maxYear = $('#maximumYear').val();

	console.log(minYear, maxYear);
}