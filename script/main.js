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


$(document).ready(function(){
	$('#randomCocktailButton').on('click',handleRandomCocktailDataClick);
<<<<<<< HEAD
	$('#vodkaButton').on('click',handleCocktailByIngredientClick);
	$('#scotchButton').on('click',handleCocktailByIngredientClick);
    $('#tequilaButton').on('click',handleCocktailByIngredientClick);
    $('#ginButton').on('click',handleCocktailByIngredientClick);
    $('#rumButton').on('click',handleCocktailByIngredientClick);
    $('#bourbonButton').on('click',handleCocktailByIngredientClick);
    $('#brandyButton').on('click',handleCocktailByIngredientClick);
    $('#beerButton').on('click',handleCocktailByIngredientClick);

	// getData().then(dataPullSuccess,dataPullFail);

=======
>>>>>>> 75ecb821ec52b5533e02758d18cb7c2ca86b6966
	// getRandomCocktailData().then(dataPullSuccess, dataPullFail);
	// getDrinkByLiquor(vod).then(dataPullSuccess, dataPullFail);

    // getMovieDB().then(movieDataSuccess, movieDataFail);
    $('.yelpOpen').click(yelpOpenClick);
    $('.cocktailOpen').click(cocktailOpenClick);
    $('.movieOpen').click(movieOpenClick);
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



/*****//*****//*****//*****//*****//*****//*****//*****//*****//*****/

function handleCocktailByIngredientClick(){
    liquor = $(this).text();
    getCocktailByIngredient().then(dataPullSuccess,dataPullFail);
    var drinkListButton = $('<button>').text(liquor + ' Drink List').on('click',sendCocktailByIngredient);
    $('#drinkButtonResponseDiv').append(drinkListButton);
}

function sendCocktailByIngredient(){
    console.log(drinkByIngredient.drinks);
    for(var i=0; i<drinkByIngredient.drinks.length; i++){
        drinkByIngredientArray.push(drinkByIngredient.drinks[i].strDrink);
    }
    console.log(drinkByIngredientArray);
    for(var j=0; j<drinkByIngredientArray.length; j++){
        var drinkListDiv = $('<div>');
        $('#drinkList').append(drinkListDiv);
        var drinkButton = $('<button>'); //onclick
        $(drinkListDiv).append(drinkButton);
        $(drinkButton).append(drinkByIngredientArray[j]);
    }
}

/*****//*****//*****//*****//*****//*****//*****//*****//*****//*****/

function handleRandomCocktailDataClick(){
    sendRandomCocktailData();
}

function sendRandomCocktailData(){
    randomCocktailName = randomDrinkData.drinks[0].strDrink;
    $('#randomCocktailDisplay').text('Drink Name: ' + randomCocktailName);
    var newImgTag = $('<img>').addClass('cocktailImage');
    $('#randomCocktailImgDisplay').append(newImgTag);
    randomCocktailImageSource = randomDrinkData.drinks[0].strDrinkThumb;
    $(newImgTag).attr('src', randomCocktailImageSource);

    randomCocktailIngredients();
    randomCocktailMeasures();
    randomCocktailDirections();
}

function randomCocktailIngredients(){
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
        $('#randomCocktailIngredientsDisplay').append(ingredientsDiv);
        $(ingredientsDiv).append(ingredientsArrayFiltered[n] + " : ");
	}
}

function randomCocktailMeasures(){
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
    for(var n=0; n<measuresArrayFiltered.length; n++){
        var measuresDiv = $('<div>');
        $('#randomCocktailMeasuresDisplay').append(measuresDiv);
        $(measuresDiv).append(measuresArrayFiltered[n]);
    }
}

function randomCocktailDirections(){
    var underlineTag = $('<u></u>');
    $('#instructionsHeader').append(underlineTag);
    var newHeader = $('<h4>');
    $(underlineTag).append(newHeader);
    $(newHeader).text('Instructions: ');
	var instructionsDiv = $('<div>');
	$('#randomCocktailInstructionsDisplay').append(instructionsDiv);
	randomCocktailInstructions = randomDrinkData.drinks[0].strInstructions;
	$(instructionsDiv).text(randomCocktailInstructions);
}

/*****end of eric's js edit*****/

