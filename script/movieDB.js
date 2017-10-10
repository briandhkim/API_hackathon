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
	*/ 
	$.ajax({
		url: 'https://api.themoviedb.org/3/discover/movie',
		method: 'get',
		data:{
			'api_key': '35b9c1bde49e80845af170911910cbb0',
			primary_release_year : 2015,	//year input
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