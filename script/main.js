var vod = "Vodka";
var lowrat = '2.0';
var highrat = '4.0';

// var model = new Model();
// var view = new View();
// var control = new Control();

/***/
var randomCocktailName = null;
var randomCocktailImageSource = null;
var ingredientsArray = [];
var ingredientsArrayFiltered = [];
var measuresArray = [];
var measuresArrayFiltered = [];


$(document).ready(function(){
	$('#randomCocktailButton').on('click',handleRandomCocktailDataClick);
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

function handleRandomCocktailDataClick(){
    sendRandomCocktailData();
}

function sendRandomCocktailData(){
    randomCocktailName = randomDrinkData.drinks[0].strDrink;
    $('#randomCocktailDisplay').text("Drink Name: " + randomCocktailName);
    var newImgTag = $('<img>').addClass('cocktailImage');
    $('#randomCocktailImgDisplay').append(newImgTag);
    randomCocktailImageSource = randomDrinkData.drinks[0].strDrinkThumb;
    $(newImgTag).attr('src', randomCocktailImageSource);

    randomCocktailIngredients();
    randomCocktailMeasures();
    randomCocktailInstructions();
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
		var ingredientDiv = $('<div>');
        $('#randomCocktailIngredientsDisplay').append(ingredientDiv);
        $(ingredientDiv).append(ingredientsArrayFiltered[n] + " : ");
	}
	//console.log(randomDrinkData.drinks[0]);
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
        var measureDiv = $('<div>');
        $('#randomCocktailMeasuresDisplay').append(measureDiv);
        $(measureDiv).append(measuresArrayFiltered[n]);
    }
    //console.log(randomDrinkData.drinks[0]);
}

function randomCocktailInstructions(){
	var instructionsDiv = $('<div>');
}
/*****end of eric's js edit*****/

