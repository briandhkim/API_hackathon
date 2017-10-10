var vod = "Vodka";
var lowrat = '2.0';
var highrat = '4.0';

$(document).ready(function(){
	$('#top-filler').css('height',$('nav').height());
	// getData().then(dataPullSuccess,dataPullFail);

	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);

	// getYelpData().then(yelpSuccess,yelpFail);

	getMovieDB().then(movieDataSuccess, movieDataFail);
	getGenreList().then(genrePullSuccess, genrePullFail);
});