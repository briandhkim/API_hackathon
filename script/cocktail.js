// http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

var liquor = "Vodka";
var randomDrinkData = null;
/*****/
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

// http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
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