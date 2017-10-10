var vod = "Vodka";
var lowrat = '2.0';
var highrat = '4.0';

$(document).ready(function(){
	$('#top-filler').css('height',$('nav').height());
	// getData().then(dataPullSuccess,dataPullFail);
	// yelpTest();

	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);

	getRandMovieByRating(lowrat,highrat).then(rouletteSuccess,rouletteFail);
	getYelpData().then(yelpSuccess,yelpFail);
});