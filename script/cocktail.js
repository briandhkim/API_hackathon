var liquor = null;
var cocktail = null;
var randomDrinkData = null;
var drinkByIngredient = null;
var specificDrinkData = null;

function getRandomCocktailData(){
	var promise = {
		then: function(resolve, reject){
			this.resolve = resolve;
			this.reject = reject;
		}
	};
	$.ajax({
		url: 'http://www.thecocktaildb.com/api/json/v1/1/random.php',
		dataType : 'json',
		method: 'get',
		success: function(drink_data){
			promise.resolve(drink_data);
			randomDrinkData = drink_data;
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}
function dataPullSuccess(drink_data){
	console.log(drink_data);

}
function dataPullFail(err){
	console.log(err);
}

// getRandomCocktailData().then(dataPullSuccess,dataPullFail);

function getCocktailByIngredient(){
    var promise = {
        then: function(resolve, reject){
            this.resolve = resolve;
            this.reject = reject;
        }
    };
    $.ajax({
        url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor,
        dataType : 'json',
        method: 'get',
        success: function(drink_data){
            promise.resolve(drink_data);
            drinkByIngredient = drink_data;
        },
        error: function(err){
            promise.resolve(err);
        }
    });
    return promise;
}
function dataPullSuccess(drink_data){
    console.log(drink_data);
}
function dataPullFail(err){
    console.log(err);
}

// getCocktailByIngredient().then(dataPullSuccess,dataPullFail);

function getSpecificCocktailData(){
    var promise = {
        then: function(resolve, reject){
            this.resolve = resolve;
            this.reject = reject;
        }
    };
    $.ajax({
        url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail,
        dataType : 'json',
        method: 'get',
        success: function(drink_data){
            promise.resolve(drink_data);
            specificDrinkData = drink_data;
            sendSpecificCocktailData();
        },
        error: function(err){
            promise.resolve(err);
        }
    });
    return promise;
}
function dataPullSuccess(drink_data){
    console.log(drink_data);
}
function dataPullFail(err){
    console.log(err);
}

function sendSpecificCocktailData(){
    var specificCocktailName = specificDrinkData.drinks[0].strDrink;
    $('.drinkName').text(specificCocktailName);
    var specificCocktailImageSource = specificDrinkData.drinks[0].strDrinkThumb;
    $('.randomCocktailImg').attr('src', specificCocktailImageSource);
    specificCocktailIngredients();
    specificCocktailMeasures();
    specificCocktailDirections();
}

// getSpecificCocktailData().then(dataPullSuccess,dataPullFail);
