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

function yelpSuccess(dat){
  console.log(dat);
}
function yelpFail(er){
  console.log(er);
}