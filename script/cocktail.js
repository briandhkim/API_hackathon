var liquor = '';
var cocktail ='';

// getRandomCocktailData().then(randCocktailSuccess,randCocktailFail);
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
/**
    drink_data object with key[drinks] and val array(holds data)
            drink_data.drinks: [{}]
            drink_data.drinks[0] = {}
            drink_data.drinks[0].strDrink = "drink name"
            drink_data.drinks[0].strDrinkThumb = 'img src'
            drink_data.drinks[0].strInstructions = 'instructions'
            drink_data.drinks[0].strIngredient1 = 'first ingredient'    ;will need to be looped to check all (1-15) -returns empty string for blank
            drink_data.drinks[0].strMeasure1 = 'first ing measure'      ;will have same idx as strIng
**/
function randCocktailSuccess(drink_data){
    // console.log(drink_data.drinks[0]);
    // console.log(drink_data.drinks[0].strIngredient12);
    var ct_data = drink_data.drinks[0];
    drinkDOMupdate(ct_data);            //call the drinkDOMupdate function with drink data object 
}
function randCocktailFail(err){
	console.log(err);
}


// getCocktailByIngredient().then(cocktailIngSuccess,cocktailIngFail);
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
/**
    drink_data.drinks = []      -array length differes everytime
    choose one drink by getting a number based on array length
    only returns cocktail name. need to do getSpecificCocktailData with cocktail name
    cocktail(globalvariable) gets assigned (up top) --> name of the drink in string

    this function randomly selects from given array of drinks based on liquor selection
    calls ajax call function for getting a drink based on cocktail name
**/
function cocktailIngSuccess(drink_data){
    // console.log(drink_data);
    // console.log(drink_data.drinks.length); 
    var i = Math.floor(Math.random()*drink_data.drinks.length);
    var randDrink = drink_data.drinks.splice(i,1);
    // console.log(randDrink[0].strDrink);
    cocktail = randDrink[0].strDrink;
    getSpecificCocktailData().then(cocktailSpecificSuccess,cocktailSpecificFail);
}
function cocktailIngFail(err){
    console.log(err);
}




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
/**
    same data returned as getRandomCocktailData
**/ 
function cocktailSpecificSuccess(drink_data){
    console.log(drink_data);
     var ct_data = drink_data.drinks[0];
    drinkDOMupdate(ct_data);        //call the drinkDOMupdate function with drink data object 
}
function cocktailSpecificFail(err){
    console.log(err);
}




function cocktailButton(){
    var userInput = $('#drinkSelect').val();
    // console.log(userInput)
    if (userInput==="Random"){
        // do random drink ajax call
        getRandomCocktailData().then(randCocktailSuccess,randCocktailFail);
    }else {
        liquor = userInput;
        getCocktailByIngredient().then(cocktailIngSuccess, cocktailIngFail);
        // do random drink ajax call
    }
}

/**
    updates dom with drink info passed in
    param - drink_data.drinks[0]  = object with drink data reference the comment up top
    return - nothing
**/
function drinkDOMupdate(ct_data){   
 // saving ingredient and measures data
    var cocktailIngredients = [];
    var cocktailIngMeasures = [];
    for (var i=1; i<16; i++){
        if(ct_data['strIngredient'+i]!=='' && ct_data['strIngredient'+i]!==undefined){
            cocktailIngredients[i-1] = ct_data['strIngredient'+i];
            cocktailIngMeasures[i-1] = ct_data['strMeasure'+i];
        }
    }
    // console.log(cocktailIngredients, cocktailIngMeasures);
    //end of saving ingredient and measures data

    $('.drinkName').text(ct_data.strDrink);
    $('.cocktailInstructions').text(ct_data.strInstructions);
    $('.randomCocktailImg').attr('src', ct_data.strDrinkThumb);
    $('.ingredientsList li').remove();
    var ingList = $('.ingredientsList');
    for(var i=0; i<cocktailIngredients.length; i++){
        var ing  = $('<span>', {
            text: cocktailIngredients[i] + ' : ',
            class : 'ct-Ingredient'
        });
        var measure = $('<span>',{
            text: cocktailIngMeasures[i],
            class : 'ct-Measure'
        });

        var liElm = $('<li>').append(ing).append(measure);
        ingList.append(liElm);
    }
}