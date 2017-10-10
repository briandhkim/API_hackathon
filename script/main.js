var vod = "Vodka";
var lowrat = '2.0';
var highrat = '4.0';
/***/
var randomCocktailName = null;
var randomCocktailImageSource = null;

$(document).ready(function(){
	$('#top-filler').css('height',$('nav').height());
	$('#randomCocktailButton').on('click',handleRandomCocktailDataClick);
	// getData().then(dataPullSuccess,dataPullFail);
	// yelpTest();

	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);

	// getRandMovieByRating(lowrat,highrat).then(rouletteSuccess,rouletteFail);
	// getYelpData().then(yelpSuccess,yelpFail);
});

function handleRandomCocktailDataClick(){
    sendRandomCocktailData();
}

function sendRandomCocktailData(){
    randomCocktailName = randomDrinkData.drinks[0].strDrink;
    $('#randomCocktailDisplay').text("Drink Name: " + randomCocktailName);
    var newImgTag = $('<img>');
    $('#randomCocktailImgDisplay').append(newImgTag);
    randomCocktailImageSource = randomDrinkData.drinks[0].strDrinkThumb;
    $(newImgTag).attr('src', randomCocktailImageSource);
}