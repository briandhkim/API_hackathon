/*contains objects for model and view*/


function Model(){
	/**** data acquired from cocktailDB ****/
	this.cocktail_imgSrc ='';			//string of image source
	this.cocktail_name = '';			//cocktail name in string
	this.cocktail_ingridients = null;	//array of strings 
	this.cocktail_instructions = '';	//string of cocktail making instruction
	this.cocktail_measure = null;		//array of strings - index/length should match cocktail_ingridients
	/****** end of data acquired from cocktailDB ******/
	/**** user input data ****/
	this.cocktail_inputIngridient = '';	//drop down will be random unless something else is selected

	this.cocktail_liquorList = []; 		//to be used for generating dom list of liquor list
	//end of cocktail api data

	/***** user search parameter for movieDB *****/
	this.movieDB_releaseDateMin = "2001-01-01"; 	//default set to beginning of 2001
	this.movieDB_releaseDateMax = "2017-09-11";		//default set date
			//the two above dates may change based on user input
	this.movieDB_lowestRating = 0;		//default lowest rating is 0
	this.movieDB_highestRatign = 10;	//default highets rating is 10
	/*** end of search parameter for movieDB ***/
	/**** data to fetch from movieDB ****/
	this.movieDB_title = '';	// 	key: original_title
	this.movieDB_rating = 0;	//	key: vote_average
	this.movieDB_genres = [];	//	key: genres[array].name --each var should be string
	this.movieDB_imgSrc = '';	//	key: poster_path --returns string will need to be concatenated to var below
	this.movieDB_attachImgTo ='https://image.tmdb.org/t/p/w500';
	/**** end of data fetched from movieDB ****/
}


function View(){

	/*
		evaluate the data received from movieDB
		call function from view to update DOM
		assign appropriate input from DOM to values in Model
			this will be in the user search parameter area for the values
	*/ 
	this.randomMovieButton(){

	}

	/*
		get a random movie from the netflix data on load and update dom with the info
	*/
	this.getRandomMovieFromStart(){

	}
}