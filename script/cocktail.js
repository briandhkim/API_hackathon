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

getRandomCocktailData().then(dataPullSuccess,dataPullFail);

/*****/
// function getDrinkByLiquor(liquor){
// 	var promise = {
// 		then: function(resolve, reject){
// 			this.resolve = resolve;
// 			this.reject = reject;
// 		}
// 	};
// 	$.ajax({
// 		url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php',
// 		dataType: 'json',
// 		method: 'get',
// 		data: {
// 			'i': liquor
// 		},
// 		success: function(drink_data){
// 			promise.resolve(drink_data);
// 		},
// 		error: function(err){
// 			promise.resolve(err);
// 		}
// 	});
// 	return promise;
// }
/*****/
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

// getSpecificCocktailData().then(dataPullSuccess,dataPullFail);

function getSpecificCocktailData(){
    var promise = {
        then: function(resolve, reject){
            this.resolve = resolve;
            this.reject = reject;
        }
    };
    $.ajax({
        url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + cocktail,
        dataType : 'json',
        method: 'get',
        success: function(drink_data){
            promise.resolve(drink_data);
            specificDrinkData = drink_data;
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