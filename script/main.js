
$(document).ready(function(){
	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);
    $('.yelpOpen').click(yelpOpenClick);
    $('.cocktailOpen').click(cocktailOpenClick);
    $('.movieOpen').click(movieOpenClick);


    // functions for movieDB api
    $('#movieDBbutton').click(movieDbButtonClick);
    getGenreList().then(genrePullSuccess,genrePullFail);
    movieDbButtonClick();   //do one random gen on load
    // end of functions for movieDB api

    //functions for yelp api
    $('.yelpZipButton').click(yelpSearchButton);
    yelpSearchButton();

    // get netflix data
    netflixRouletteButton();
    $('#netflixSpinButton').on('click', netflixRouletteButton);

    //functions for cocktailAPI
    getRandomCocktailData().then(randCocktailSuccess,randCocktailFail);
    $('#drinkButton').click(cocktailButton);
    //end of functions for cocktailAPI
});


/***************************************************************************************************
* function name : yelpOpenClick
* @params {undefined} none
* @returns: {undefined} none
* function description : opens yelp display area and closes other display areas
        changes background color to yelp specific
*/
function yelpOpenClick(){
    $('.selectDisplay').addClass('yelpGradent');
    $('.selectDisplay').removeClass('netflixGradent');
    $('.selectDisplay').removeClass('drinkGradent');
	$('.yelpDisplay').css('display','block');
	$('.cocktailDisplay, .movieDisplay').css('display','none');
}
/***************************************************************************************************
* function name : cocktailOpenClick
* @params {undefined} none
* @returns: {undefined} none
* function description : oepns cocktail display area and closes other display areas
        toggle class for changing background color to cocktail specific
*/
function cocktailOpenClick(){
    $('.selectDisplay').addClass('drinkGradent');
    $('.selectDisplay').removeClass('netflixGradent');
    $('.selectDisplay').removeClass('yelpGradent');
	$('.cocktailDisplay').css('display', 'block');
	$('.yelpDisplay, .movieDisplay').css('display','none');
}
/***************************************************************************************************
* function name : movieOpenClick    
* @params {undefined} none
* @returns: {undefined} none
* function description : open movie display area and closes other display areas
        toggle class for changing background color to cocktail specific
*/
function movieOpenClick(){
    $('.selectDisplay').addClass('netflixGradent');
    $('.selectDisplay').removeClass('yelpGradent');
    $('.selectDisplay').removeClass('drinkGradent');
	$('.movieDisplay').css('display','block');
	$('.yelpDisplay, .cocktailDisplay').css('display','none');
}

var loadIcon = $('<i>',{
    class: 'fa fa-spinner fa-spin loadicon'
    // id: 'loadicon'
});
var largeLoadIcon = $('<i>',{
    class: 'fa fa-spinner fa-spin loadicon fa-5x'
});

/***************************************************************************************************
* function name 
* @params {undefined} none
* @returns: {undefined} none
* function description
*/