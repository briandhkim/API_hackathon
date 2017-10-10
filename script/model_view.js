/*contains objects for model and view*/


function Model(){
	this.cocktail_imgSrc ='';			//string of image source
	this.cocktail_name = '';			//cocktail name in string
	this.cocktail_ingridients = null;	//array of strings 
	this.cocktail_instructions = '';	//string of cocktail making instruction
	this.cocktail_measure = null;		//array of strings - index/length should match cocktail_ingridients
	
	this.cocktail_liquorList = []; 		//to be used for generating dom list of liquor list
	//end of cocktail api data

	this.movieDB_releaseDateMin = "2001-01-01"; 	//default set to beginning of 2001
	this.movieDB_releaseDateMax = "2017-09-11";		//default set date
			//the two above dates may change based on user input
	this.movieDB_lowestRating = 0;		//default lowest rating is 0
	this.movieDB_highestRatign = 10;	//default highets rating is 10
	
}
