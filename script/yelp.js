// function getData(){
// 	var promise = {
// 		then: function(resolve, reject){
// 			this.resolve = resolve;
// 			this.reject = reject;
// 		}
// 	};

// 	$.ajax({
// 		"async": true,
//   		"crossDomain": true,
//   		"url": "https://api.yelp.com/v3/businesses/search?term=restaurant&restaurant=&location=Irvine&Authorization=Bearer%20QjA1zFI4n5W5lwe8R8AuoXLN2BOtgQQGxRGGEjh_SV7FDCiM7E6toU9vBpm8jRGSxlFqavss1AmTPCIkw6d0N--wGEYeo5y4eEfwD8UUT6kZ2d5k_N0dWtc7KGTcWXYx",
//   		"method": "GET",
//   		"headers": {
//     		"authorization": "Bearer QjA1zFI4n5W5lwe8R8AuoXLN2BOtgQQGxRGGEjh_SV7FDCiM7E6toU9vBpm8jRGSxlFqavss1AmTPCIkw6d0N--wGEYeo5y4eEfwD8UUT6kZ2d5k_N0dWtc7KGTcWXYx",
//     		"cache-control": "no-cache"
//   		},
//   		"data": {
//     		"term": "\"food\"",
//    			 "location": "{\"zip_code\": \"92620\"}"
//  		}
// 	});
// 	return promise;
// }

// function dataPullSuccess(dat){
// 	console.log(dat);
// }

// function dataPullFail(er){
// 	console.log(er);
// }



function getYelpData(){
  var promise = {
    then: function(resolve, reject){
      this.resolve = resolve;
      this.reject = reject;
    }
  };
  $.ajax({
    url: 'https://api.yelp.com/v3/businesses/search',
    method: 'get',
    headers:{
      "authorization" : "Bearer QjA1zFI4n5W5lwe8R8AuoXLN2BOtgQQGxRGGEjh_SV7FDCiM7E6toU9vBpm8jRGSxlFqavss1AmTPCIkw6d0N--wGEYeo5y4eEfwD8UUT6kZ2d5k_N0dWtc7KGTcWXYx",
    },
    data:{
      "term" : "food",
      "location" : '{"zip_code" : "92620"}'
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