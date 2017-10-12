var zipcode = "92620"

function getYelpData(){
  var promise = {
    then: function(resolve, reject){
      this.resolve = resolve;
      this.reject = reject;
    }
  };
  $.ajax({
    url: 'http://yelp.iamandyong.com/search',
    method: 'POST',
    data:{
      "term" : "food",
      "location" : zipcode,
      "access_token": "QjA1zFI4n5W5lwe8R8AuoXLN2BOtgQQGxRGGEjh_SV7FDCiM7E6toU9vBpm8jRGSxlFqavss1AmTPCIkw6d0N--wGEYeo5y4eEfwD8UUT6kZ2d5k_N0dWtc7KGTcWXYx"
    },
    success: function(yelpData){
      promise.resolve(yelpData);
    },
    error: function(err){
      promise.resolve(err);
    }
  });
  return promise;
}

/***
  yelpData returns:
  object with keys - businesses, region
  yelpData.businesses -- array len(20)
  each array index contains an object with restaurant data
  yelpData.businesses[i].name           -- restaurant name; string    #yelpResult[i]Name
  yelpData.businesses[i].image_url      -- restaurant image; string   .yelpResult[i] img -src
  yelpData.businesses[i].display_phone  -- restaurant phone num; string  #restaurant[i]_phone
  yelpData.businesses[i].url            -- link to yelp; string       #restaurant[i]_link -href
  yelpData.businesses[i].rating         -- rating; int                #restaurant[i]_rating
  yelpData.businesses[i].price          -- $$; string                 #yelpResult[i]-price
***/

function yelpSuccess(dat){
  // console.log(dat);
  var threeYelp = randomThreeFood(dat.businesses);
  // console.log(threeYelp);
  for(var i=0; i<3; i++){
    $('#yelpResult'+(i+1)+'Name').text(threeYelp[i][0].name);
    $('.yelpResult'+(i+1) + ' img').attr('src', threeYelp[i][0].image_url);
    $('#restaurant'+(i+1)+'_phone').text(threeYelp[i][0].display_phone);
    $('#restaurant'+(i+1)+'_link').attr('href', threeYelp[i][0].url);
    $('#restaurant'+(i+1)+'_rating').text(threeYelp[i][0].rating);
    $('#yelpResult'+(i+1)+'-price').text(threeYelp[i][0].price);
  }
}
function yelpFail(er){
  console.log(er);
}

function yelpSearchButton(){
  var yelpZip = $('#yelpZip').val();
  if(yelpZip!==''){
    zipcode = yelpZip;
  }
  getYelpData().then(yelpSuccess, yelpFail);
}


/**
  called by yelpSuccess function
  parameter - array: yelpData.businesses
  returns array of 3 objects containing restaurant info
**/
function randomThreeFood(yelpArr){  
  var returnArr =[];
  var randIdx = 20;
  for(var i=0; i<3; i++){
    var idx = Math.floor(Math.random()*randIdx);
    randIdx--;
    returnArr[i]= yelpArr.splice(idx,1);
  }
  return returnArr;   
}