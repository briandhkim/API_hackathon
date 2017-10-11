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
  yelpData.businesses[i].name           -- restaurant name; string
  yelpData.businesses[i].image_url      -- restaurant image; string
  yelpData.businesses[i].display_phone  -- restaurant phone number; string
  yelpData.businesses[i].url            -- link to yelp; string
  yelpData.businesses[i].rating         -- rating; int
  yelpData.businesses[i].price          -- $$; string
  
***/

function yelpSuccess(dat){
  console.log(dat);
}
function yelpFail(er){
  console.log(er);
}