var vod = "Vodka";
var lowrat = '2.0';
var highrat = '4.0';

// var model = new Model();
// var view = new View();
// var control = new Control();

/***/
var randomCocktailName = null;
var randomCocktailImageSource = null;
var randomCocktailInstructions = null;
var ingredientsArray = [];
var ingredientsArrayFiltered = [];
var measuresArray = [];
var measuresArrayFiltered = [];
var drinkByIngredientArray = [];
var counter = 0;

$(document).ready(function(){
	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);
    $('.yelpOpen').click(yelpOpenClick);
    $('.cocktailOpen').click(cocktailOpenClick);
    $('.movieOpen').click(movieOpenClick);

    // $('#drinkButton').click(handleRandomCocktailDataClick);
    $('#confirmButton').click(selectFunction);

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
    $('#netflixSpinButton').on('click', grabMoviesFromDataBase)
});

function yelpOpenClick(){
	$('.yelpDisplay').css('display','block');
	$('.cocktailDisplay, .movieDisplay').css('display','none');
}
function cocktailOpenClick(){
	$('.cocktailDisplay').css('display', 'block');
	$('.yelpDisplay, .movieDisplay').css('display','none');
}
function movieOpenClick(){
	$('.movieDisplay').css('display','block');
	$('.yelpDisplay, .cocktailDisplay').css('display','none');
}

/*****start of eric's js edit*****/

function selectFunction(){
    if($('select').val() === 'Random'){
        getRandomCocktailData().then(dataPullSuccess,dataPullFail);
        $('#drinkButton').text('Get Random Drink').click(handleRandomCocktailDataClick);
    } else if ($('select').val() === 'Vodka'){
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess,dataPullFail);
        $('#drinkButton').text('Get Random '+liquor+' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Scotch') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Tequila') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Gin') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Rum') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Bourbon') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Brandy') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    } else if ($('select').val() === 'Beer') {
        liquor = $('select').val();
        getCocktailByIngredient().then(dataPullSuccess, dataPullFail);
        $('#drinkButton').text('Get Random ' + liquor + ' Drink').click(handleCocktailByIngredientClick);
    }
}

// function instructionsDivEdits(){
//     counter++;
//     console.log(counter);
//     if(counter>1) {
//         $('.ingredientsDiv').remove();
//         $('.measuresDiv').remove();
//         var newIngredientsDiv = $('<div>').addClass('ingredientsDiv');
//         $('#ingredientsContainer').append(newIngredientsDiv);
//         var newMeasuresDiv = $('<div>').addClass('measuresDiv');
//         $('#ingredientsContainer').append(newMeasuresDiv);
//     }
// }

/*****//*****//*****//*****//*****//*****//*****//*****//*****//*****/

function handleCocktailByIngredientClick(){
    // var drinkListButton = $('<button>').text(liquor + ' Drink List').on('click',sendCocktailByIngredient);
    // $('#drinkButtonResponseDiv').append(drinkListButton);
    sendCocktailByIngredient();
    getCocktailByIngredient().then(dataPullSuccess,dataPullFail);
}

function sendCocktailByIngredient(){
    console.log(drinkByIngredient.drinks);
    for(var i=0; i<drinkByIngredient.drinks.length; i++){
        drinkByIngredientArray.push(drinkByIngredient.drinks[i].strDrink);
    }
    console.log(drinkByIngredientArray);
    var randomIndex = Math.floor(Math.random() * drinkByIngredientArray.length);
    console.log(drinkByIngredientArray[randomIndex]);
    cocktail = drinkByIngredientArray[randomIndex];
    handleSpecificCocktailDataFunction();
}

function handleSpecificCocktailDataFunction(){
    getSpecificCocktailData().then(dataPullSuccess,dataPullFail);
    // sendSpecificCocktailData();
}
                                            //*This got moved to cocktail.js*//
// function sendSpecificCocktailData(){
//     var specificCocktailName = specificDrinkData.drinks[0].strDrink;
//     $('.drinkName').text(specificCocktailName);
//     var specificCocktailImageSource = specificDrinkData.drinks[0].strDrinkThumb;
//     $('.randomCocktailImg').attr('src', specificCocktailImageSource);
//     specificCocktailIngredients();
//     specificCocktailMeasures();
//     specificCocktailDirections();
// }

function specificCocktailIngredients(){
    ingredientsArray = [];
    ingredientsArrayFiltered = [];
    for(var i=1; i<16; i++){
        ingredientsArray.push(specificDrinkData.drinks[0]['strIngredient' + i]);
    }
    //console.log(ingredientsArray);
    for(var j=0; j<ingredientsArray.length; j++){
        if(ingredientsArray[j] !== '' && ingredientsArray[j] !== null){
            console.log(ingredientsArray[j]);
            ingredientsArrayFiltered.push(ingredientsArray[j]);
        }
    }
    for(var n=0; n<ingredientsArrayFiltered.length; n++){
        var ingredientsDiv = $('<div>');
        $('.ingredientsDiv').append(ingredientsDiv);
        $(ingredientsDiv).append(ingredientsArrayFiltered[n] + " : ");
    }
}

function specificCocktailMeasures(){
    measuresArray = [];
    measuresArrayFiltered = [];
    for(var i=1; i<16; i++){
        measuresArray.push(specificDrinkData.drinks[0]['strMeasure' + i]);
    }
    //console.log(measuresArray);
    for(var j=0; j<measuresArray.length; j++){
        if(measuresArray[j] !== '' && measuresArray[j] !== ' ' && measuresArray[j] !== null){
            console.log(measuresArray[j]);
            measuresArrayFiltered.push(measuresArray[j]);
        }
    }
    //$('.measuresDiv').remove();
    for(var n=0; n<measuresArrayFiltered.length; n++){
        var measuresDiv = $('<div>');
        $('.measuresDiv').append(measuresDiv);
        $(measuresDiv).append(measuresArrayFiltered[n]);
    }
}

function specificCocktailDirections(){
    specificCocktailInstructions = specificDrinkData.drinks[0].strInstructions;
    $('.instructions').text(specificCocktailInstructions);
}

/*****//*****//*****//*****//*****//*****//*****//*****//*****//*****/

function handleRandomCocktailDataClick(){
    sendRandomCocktailData();
    getRandomCocktailData().then(dataPullSuccess,dataPullFail);
}

function sendRandomCocktailData(){
    randomCocktailName = randomDrinkData.drinks[0].strDrink;
    $('.drinkName').text(randomCocktailName);
    randomCocktailImageSource = randomDrinkData.drinks[0].strDrinkThumb;
    $('.randomCocktailImg').attr('src', randomCocktailImageSource);

    randomCocktailIngredients();
    randomCocktailMeasures();
    randomCocktailDirections();
}

function randomCocktailIngredients(){
    ingredientsArray = [];
    ingredientsArrayFiltered = [];
    for(var i=1; i<16; i++){
    	ingredientsArray.push(randomDrinkData.drinks[0]['strIngredient' + i]);
	}
    //console.log(ingredientsArray);
	for(var j=0; j<ingredientsArray.length; j++){
		if(ingredientsArray[j] !== '' && ingredientsArray[j] !== null){
			console.log(ingredientsArray[j]);
			ingredientsArrayFiltered.push(ingredientsArray[j]);
		}
	}
	for(var n=0; n<ingredientsArrayFiltered.length; n++){
        var ingredientsDiv = $('<div>');
        $('.ingredientsDiv').append(ingredientsDiv);
        $(ingredientsDiv).append(ingredientsArrayFiltered[n] + " : ");
	}
}

function randomCocktailMeasures(){
    measuresArray = [];
    measuresArrayFiltered = [];
    for(var i=1; i<16; i++){
        measuresArray.push(randomDrinkData.drinks[0]['strMeasure' + i]);
    }
    //console.log(measuresArray);
    for(var j=0; j<measuresArray.length; j++){
        if(measuresArray[j] !== '' && measuresArray[j] !== ' ' && measuresArray[j] !== null){
            console.log(measuresArray[j]);
            measuresArrayFiltered.push(measuresArray[j]);
        }
    }
    //$('.measuresDiv').remove();
    for(var n=0; n<measuresArrayFiltered.length; n++){
        var measuresDiv = $('<div>');
        $('.measuresDiv').append(measuresDiv);
        $(measuresDiv).append(measuresArrayFiltered[n]);
    }
}

function randomCocktailDirections(){
	randomCocktailInstructions = randomDrinkData.drinks[0].strInstructions;
    $('.instructions').text(randomCocktailInstructions);
}

/*****end of eric's js edit*****/
