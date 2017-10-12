
$(document).ready(function(){
	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);
    $('.yelpOpen').click(yelpOpenClick);
    $('.cocktailOpen').click(cocktailOpenClick);
    $('.movieOpen').click(movieOpenClick);

    // $('#drinkButton').click(handleRandomCocktailDataClick);
    // $('#confirmButton').click(selectFunction);

    // functions for movieDB api
    $('#movieDBbutton').click(movieDbButtonClick);
    getGenreList().then(genrePullSuccess,genrePullFail);
    movieDbButtonClick();   //do one random gen on load
    // end of functions for movieDB api

    //functions for yelp api
    $('.yelpZipButton').click(yelpSearchButton);
    yelpSearchButton();

    // get netflix data
    grabMoviesFromDataBase();
    $('#netflixSpinButton').on('click', grabMoviesFromDataBase);

    //functions for cocktailAPI
    getRandomCocktailData().then(randCocktailSuccess,randCocktailFail);
    $('#drinkButton').click(cocktailButton);
    //end of functions for cocktailAPI
});

function yelpOpenClick(){
    $('.selectDisplay').addClass('yelpGradent');
    $('.selectDisplay').removeClass('netflixGradent');
    $('.selectDisplay').removeClass('drinkGradent');
	$('.yelpDisplay').css('display','block');
	$('.cocktailDisplay, .movieDisplay').css('display','none');
}
function cocktailOpenClick(){
    $('.selectDisplay').addClass('drinkGradent');
    $('.selectDisplay').removeClass('netflixGradent');
    $('.selectDisplay').removeClass('yelpGradent');
	$('.cocktailDisplay').css('display', 'block');
	$('.yelpDisplay, .movieDisplay').css('display','none');
}
function movieOpenClick(){
    $('.selectDisplay').addClass('netflixGradent');
    $('.selectDisplay').removeClass('yelpGradent');
    $('.selectDisplay').removeClass('drinkGradent');
	$('.movieDisplay').css('display','block');
	$('.yelpDisplay, .cocktailDisplay').css('display','none');
}

