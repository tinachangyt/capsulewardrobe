var styleApp = {};

styleApp.weatherKey = "62166a9499478fb8";
styleApp.key = 'uid9849-39423043-50';


styleApp.init = function(){
	styleApp.getStylePieces();
	styleApp.getWeatherPieces();
<<<<<<< HEAD
	styleApp.displayWarmClothesPieces = function() {console.log('warm')};
styleApp.displayColdClothesPieces = function() {console.log('cold')};
=======
	// styleApp.reloadButton();
	styleApp.countProducts();
>>>>>>> dc72e931099fc62a75e844b4c2c27adf07da57d5
};

//when user clicked "create my wardrobe" in the header, go to the library section.
//when user location is activated, display weather data.
//display clothes according to user's location temperature (above 20 degrees show summer clothes, below 20 degrees show autumn clothes).
//user selects products from library and product is stored in their personal capsule wardrobe.
//when user select a product, counter of 30 decreases by 1; when user unclicked the product, the counter increases.
//when user clicks the filter button (eg. all, top, bottom, jackets, selected products) display the library according to the clicked button.
//the flickity top section will show shirts/jackets, and bottom section shows pants/skirts, etc.






//count number of products user has left
styleApp.countProducts = function(){
	var counter = 10;
	$(".counterButton").click(function() {

		$("#userCounterClicks").empty();
		counter = counter - 1;
		const counterNum = $("<p>").text(counter);
		$("#userCounterClicks").append(counterNum);

		if (counter <= 0) {
			return;
		}
	});
}


//ajax call to get weather data
styleApp.getWeatherPieces = function() {
	$.ajax({
		url:`http://api.wunderground.com/api/${styleApp.weatherKey}/conditions/q/autoip.json`,
		method:"GET",
		dataType:"jsonp"
	})
	.then(function(res){
		styleApp.displayWeatherPieces(res);
		styleApp.displayAppropriateClothes(res);
	});
};

<<<<<<< HEAD
//end of ajax call



=======
>>>>>>> dc72e931099fc62a75e844b4c2c27adf07da57d5


//after getting data from getWeatherPieces, display elements needed on the page.
styleApp.displayWeatherPieces = function(weather) {
	var weatherData = weather.current_observation;
	const weatherConditionEl = $("<p>").text(weatherData.icon);
	const weatherImgEl = $("<img>").attr("src", weatherData.icon_url);
	const cityEl = $("<p>").text(weatherData.observation_location.city);
	const tempEl = $("<p>").text(weatherData.temp_c + "°C");
<<<<<<< HEAD
=======
	const temp = weatherData.temp_c;

>>>>>>> dc72e931099fc62a75e844b4c2c27adf07da57d5
	$("#weather").append(weatherImgEl, weatherConditionEl, tempEl, cityEl);
	// console.log("this is the temperature", temp)

	styleApp.displayClothesByTemp(temp);

};


<<<<<<< HEAD
styleApp.getStylePieces = function() {
=======

styleApp.getStylePieces = function() {

>>>>>>> dc72e931099fc62a75e844b4c2c27adf07da57d5
//grabbing products data from shopstyle with offset of 50 products in the first round
	$.ajax({
		url: 'http://api.shopstyle.com/api/v2/products',
		method: 'GET',
		dataType: 'json',
		data: {
			pid: styleApp.key,
			offset: 0,
			limit: 50
		}
	}).then(function(res){
		styleApp.filterClothesPieces(res);

	});


//grabbing products data from shopstyle with offset of 50 products in the second round
	$.ajax({
		url: 'http://api.shopstyle.com/api/v2/products',
		method: 'GET',
		dataType: 'json',
		data: {
			pid: styleApp.key,
			offset: 50, 
			limit: 50
		}
	}).then(function(res){
		styleApp.filterClothesPieces(res);
	});


	$.ajax({
		url: 'http://api.shopstyle.com/api/v2/products',
		method: 'GET',
		dataType: 'json',
		data: {
			pid: styleApp.key,
			offset: 100, 
			limit: 50
		}
	}).then(function(res){
		// console.log(res);
		styleApp.filterClothesPieces(res);
	});

	$.ajax({
		url: 'http://api.shopstyle.com/api/v2/products',
		method: 'GET',
		dataType: 'json',
		data: {
			pid: styleApp.key,
			offset: 150, 
			limit: 50
		}
	}).then(function(res){
		// console.log(res);
		styleApp.filterClothesPieces(res);
	});
};


styleApp.displayWarmClothesPieces = function() {console.log('warm')};
styleApp.displayColdClothesPieces = function() {console.log('cold')};

styleApp.filterClothesPieces = function(styleData){
<<<<<<< HEAD
	//styleApp.displayAppropriateClothes(temperature);
    const warmCategory = ["womens-tops", "shortsleeve-tops", "cropped-jeans", "skinny-jeans", "stretch-jeans", "day-dresses", "evening-dresses", "dresses", "casual-jackets", "denim-jackets", "leggings", "distressed-jeans", "classic-jeans", "longsleeve-tops", "sleeveless-tops", "tees-and-tshirts", "tank-tops", "tunic-tops", "mini-skirts", "mid-length-skirts", "long-skirts", "coats", "fur-and-shearling-coats", "leather-andsuede-coats"];

    const coldCategory = ["womens-tops", "shortsleeve-tops", "cropped-jeans", "skinny-jeans", "stretch-jeans", "casual-jackets", "denim-jackets", "leggings", "distressed-jeans", "classic-jeans", "longsleeve-tops", "sleeveless-tops", "tees-and-tshirts", "tank-tops", "tunic-tops", "mini-skirts", "mid-length-skirts", "long-skirts", "coats", "fur-and-shearling-coats", "leather-andsuede-coats"];

    styleData.products.forEach(function(product){
        var productCategory = product.categories[0].id;

        var filteredCategoryNum = warmCategory.indexOf(productCategory);
        if (filteredCategoryNum > -1) {
            // then display on page 
            styleApp.displayWarmClothesPieces(product);
        }
    });
    styleData.products.forEach(function(product){
        var productCategory = product.categories[0].id;

        var filteredCategoryNum = coldCategory.indexOf(productCategory);
        if (filteredCategoryNum > -1) {
            // then display on page 
            styleApp.displayColdClothesPieces(product);
        }
    });
};


//if the weather temperature is above 20 degrees, display the displayWarmClothesPieces
// else, displayColdClothesPieces

styleApp.displayAppropriateClothes = function(temperature) {
	if (temperature.temp_c > 20) {

		styleApp.displayWarmClothesPieces = function(product) {

		    var img = product.image.sizes.Large.url;
		    var name = product.name;
		    const imgEl = $('<img>').attr('src', img);
		    const nameEl = $('<h4>').text(name);

		    $("#clothes").append(imgEl, nameEl);

		}
		} else {

		styleApp.displayColdClothesPieces = function(product) {
		    var img = product.image.sizes.Large.url;
		    var name = product.name;
		    const imgEl = $('<img>').attr('src', img);
		    const nameEl = $('<h4>').text(name);
		    $("#clothes").append(imgEl, nameEl);
		}
	  }
};
=======
    const warmCategory = ["womens-tops", "shortsleeve-tops", "cropped-jeans", "skinny-jeans", "stretch-jeans", "day-dresses", "evening-dresses", "dresses", "casual-jackets", "denim-jackets", "leggings", "distressed-jeans", "classic-jeans", "longsleeve-tops", "sleeveless-tops", "tees-and-tshirts", "tank-tops", "tunic-tops", "mini-skirts", "mid-length-skirts"];

    const coldCategory = ["skinny-jeans", "stretch-jeans", "casual-jackets", "denim-jackets", "leggings", "distressed-jeans", "classic-jeans", "longsleeve-tops", "coats", "fur-and-shearling-coats", "leather-andsuede-coats"];

    styleApp.displayClothesByTemp = function(tempResults){
    	console.log("the current temp is ", tempResults);

	// if temperature is above 20C display WarmClothesPieces,
	// if temperature is below 20C display ColdClothesPieces,

	    styleData.products.forEach(function(product){
	        var productCategory = product.categories[0].id;
	        var filteredCategoryNum = warmCategory.indexOf(productCategory);

	        if (filteredCategoryNum > -1 && tempResults > 20) {
	            // then display on page 
	            // styleApp.displayWarmClothesPieces(product);
	            var img = product.image.sizes.Large.url;
	            var name = product.name;
	            const imgEl = $('<img>').attr('src', img);
	            const nameEl = $('<h4>').text(name);
	            $("#clothes").append(imgEl, nameEl);
	            console.log("temp is above 20!")
	        }
	    });

	    styleData.products.forEach(function(product){
	        var productCategory = product.categories[0].id;
	        var filteredCategoryNum = coldCategory.indexOf(productCategory);

	        if (filteredCategoryNum > -1 && tempResults < 20) {
	            // then display on page 
	            // styleApp.displayColdClothesPieces(product);
	            var img = product.image.sizes.Large.url;
	            var name = product.name;
	            const imgEl = $('<img>').attr('src', img);
	            const nameEl = $('<h4>').text(name);
	            $("#clothes").append(imgEl, nameEl);
	            console.log("temp is below 20!")
	        }
	    });
	}
}
>>>>>>> dc72e931099fc62a75e844b4c2c27adf07da57d5


//smooth scroll so results display on screen in a more obvious manner
$(".submitButton").on('click', function() {
    $('html,body').animate({
        scrollTop: $("#clothes").offset().top},
        'slow');
});

//reload button that will reload the page
//reload button that will reload the page
function reloadButton(){
	$('#reloadButton').on('click', function(){
		console.log(reloadButton);
		header.reload();
	});
};

//must add reload button to this function:
$(function(){
	styleApp.init();
<<<<<<< HEAD
	reloadButton();
});




//got cold and warm functions working
//got images printing to page
//issue is both cold and warm are printing at once - maybe review if else statement
=======
	
	});
>>>>>>> dc72e931099fc62a75e844b4c2c27adf07da57d5
