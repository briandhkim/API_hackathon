// http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

var liquor = "Vodka";

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
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}
function dataPullSuccess(dat){
	console.log(dat);
}
function dataPullFail(err){
	console.log(err);
}
// getData().then(dataPullSuccess,dataPulllFail);


// http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
function getDrinkByLiquor(liquor){
	var promise = {
		then: function(resolve, reject){
			this.resolve = resolve;
			this.reject = reject;
		}
	};
	$.ajax({
		url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php',
		dataType: 'json',
		method: 'get',
		data: {
			'i': liquor
		},
		success: function(drink_data){
			promise.resolve(drink_data);
		},
		error: function(err){
			promise.resolve(err);
		}
	});
	return promise;
}