var unit;
var toggleUnit = 0;
var positiveUnit;
var negativeUnit;
var input;
var weather_icons = {
		'Sunny' : 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
    'Mostly Sunny' : 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/fair_day@2x.png',
		'Partly Cloudy' : 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png',
		'Fair' : 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/fair_day@2x.png',
		'Mostly Cloudy' : 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/mostly_cloudy_day_night@2x.png',
		'Cloudy' : 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
		'Showers' : 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/rain_day_night@2x.png',
		'Thunderstorms' : 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/thundershowers_day_night@2x.png',
		'Isolated Thundershowers' : 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/scattered_showers_day_night@2x.png',
		'Rain' : 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/rain_day_night@2x.png',
		'Clear' : 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_night@2x.png',
		'Mostly Clear' : 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/fair_night@2x.png'
	}

function yahooWeatherApi() {

	input = searchform.location.value;

	console.log(input);

	if(input === ""){
		alert("Please enter a location");
		document.getElementById("info").innerHTML="";
		document.getElementById("city").innerHTML="";
		document.getElementById("country").innerHTML="";
		document.getElementById("image").innerHTML="";
		document.getElementById("low_high").innerHTML="";
		document.getElementById("temp_now").innerHTML="";
		document.getElementById("forecast_table").innerHTML="";
		document.getElementById("fb").innerHTML="";
		document.getElementById("yahoo_link").innerHTML="";
		return false;
	}

  // Validate number input
  num_pattern = /^\d+$/;
  if(num_pattern.test(input)){
    zip_pattern = /^\d{5}$/; 
    if(!(zip_pattern.test(input))){
        alert("Invalid zipcode: US zipcode Must be five digits\nExample: 90089");
        document.getElementById("info").innerHTML="";
        document.getElementById("city").innerHTML="";
        document.getElementById("country").innerHTML="";         
        document.getElementById("image").innerHTML="";
        document.getElementById("low_high").innerHTML="";
        document.getElementById("temp_now").innerHTML="";
        document.getElementById("forecast_table").innerHTML="";
        document.getElementById("fb").innerHTML="";
        document.getElementById("yahoo_link").innerHTML="";
        return false;
    }
  }

  // Control the F and C switch
	if(toggleUnit % 2 == 0) {
		unit = 'f';
		toggleUnit++;
    positiveUnit = 'F';
    negativeUnit = 'C';
	}
	else {
		unit = 'c';
		toggleUnit++;
    positiveUnit = 'C';
    negativeUnit = 'F';
	}

	// It seems that data will only be useful inside the $.getJSON
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + input + "') and u='" + unit +"'&format=json", function(data) {
    	console.log(data);
      if(data.query.results === null) {
        alert("No result found from the input, please try again.");
        document.getElementById("info").innerHTML="";
        document.getElementById("city").innerHTML="";
        document.getElementById("country").innerHTML="";         
        document.getElementById("image").innerHTML="";
        document.getElementById("low_high").innerHTML="";
        document.getElementById("temp_now").innerHTML="";
        document.getElementById("forecast_table").innerHTML="";
        document.getElementById("fb").innerHTML="";
        document.getElementById("yahoo_link").innerHTML="";
        return ;
      }

    	var city = data.query.results.channel.location.city;
    	var country = data.query.results.channel.location.country;
    	var state = data.query.results.channel.location.region;
      var today_day = data.query.results.channel.item.forecast[0].day;
      var today_date = data.query.results.channel.item.forecast[0].date;
    	var high = data.query.results.channel.item.forecast[0].high;
    	var low = data.query.results.channel.item.forecast[0].low;
    	var cur_temp = data.query.results.channel.item.condition.temp;
    	var temp_unit = data.query.results.channel.units.temperature;
    	var weather_text = data.query.results.channel.item.condition.text;

    	var day_1 = data.query.results.channel.item.forecast[1].date + ", " + data.query.results.channel.item.forecast[1].day;
    	var condition_1 = data.query.results.channel.item.forecast[1].text;
    	var high_1 = data.query.results.channel.item.forecast[1].high;
    	var low_1 = data.query.results.channel.item.forecast[1].low;

    	var day_2 = data.query.results.channel.item.forecast[2].date + ", " + data.query.results.channel.item.forecast[2].day;
    	var condition_2 = data.query.results.channel.item.forecast[2].text;
    	var high_2 = data.query.results.channel.item.forecast[2].high;
    	var low_2 = data.query.results.channel.item.forecast[2].low;

    	var day_3 = data.query.results.channel.item.forecast[3].date + ", " + data.query.results.channel.item.forecast[3].day;
    	var condition_3 = data.query.results.channel.item.forecast[3].text;
    	var high_3 = data.query.results.channel.item.forecast[3].high;
    	var low_3 = data.query.results.channel.item.forecast[3].low;

    	var day_4 = data.query.results.channel.item.forecast[4].date + ", " + data.query.results.channel.item.forecast[4].day;
    	var condition_4 = data.query.results.channel.item.forecast[4].text;
    	var high_4 = data.query.results.channel.item.forecast[4].high;
    	var low_4 = data.query.results.channel.item.forecast[4].low;

    	var day_5 = data.query.results.channel.item.forecast[5].date + ", " + data.query.results.channel.item.forecast[5].day;
    	var condition_5 = data.query.results.channel.item.forecast[5].text;
    	var high_5 = data.query.results.channel.item.forecast[5].high;
    	var low_5 = data.query.results.channel.item.forecast[5].low;

    	var fore_table = "<h3>Forecast</h3></br><table class='table table-hover'><thead><tr><th>Date</th><th>Condition</th><th>High</th><th>Low</th></thead>";
    	fore_table += "<tbody><tr><td>" + day_1 +"</td><td>" + condition_1 + "</td><td class=\"high\">" + high_1 + "&deg;" + temp_unit + "</td><td class=\"low\">" + low_1 + "&deg;" + temp_unit + "</td></tr>";
    	fore_table += "<tr><td>" + day_2 +"</td><td>" + condition_2 + "</td><td class=\"high\">" + high_2 + "&deg;" + temp_unit + "</td><td class=\"low\">" + low_2 + "&deg;" + temp_unit + "</td></tr>";
    	fore_table += "<tr><td>" + day_3 +"</td><td>" + condition_3 + "</td><td class=\"high\">" + high_3 + "&deg;" + temp_unit + "</td><td class=\"low\">" + low_3 + "&deg;" + temp_unit + "</td></tr>";
    	fore_table += "<tr><td>" + day_4 +"</td><td>" + condition_4 + "</td><td class=\"high\">" + high_4 + "&deg;" + temp_unit + "</td><td class=\"low\">" + low_4 + "&deg;" + temp_unit + "</td></tr>";
    	fore_table += "<tr><td>" + day_5 +"</td><td>" + condition_5 + "</td><td class=\"high\">" + high_5 + "&deg;" + temp_unit + "</td><td class=\"low\">" + low_5 + "&deg;" + temp_unit + "</td></tr>";
    	fore_table += "</tbody></table>";

    				
    	document.getElementById("city").innerHTML = city;
    	document.getElementById("country").innerHTML = state + ", " + country;
    	document.getElementById("image").innerHTML = "<span class=\"today_date\">" + today_date + ", " + today_day + "</span></br>" + "<img src='" + weather_icons[weather_text] + "'>";
    	document.getElementById("low_high").innerHTML = "<i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i>&nbsp;" + high + "&deg;" + temp_unit + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i>&nbsp;" + low +"&deg;" + temp_unit;
    	document.getElementById("temp_now").innerHTML = cur_temp + "&deg;" + "<span href='#' class='pos_temp_unit'>" + temp_unit + "</span>" + "</br><a href='#' onclick='yahooWeatherApi()' class='neg_temp_unit'>" + negativeUnit + "</a>";
    	// document.getElementById("neg_unit").innerHTML = ;
      document.getElementById("forecast_table").innerHTML = fore_table;
    	document.getElementById("fb").innerHTML="</br></br><p>How do you like it? Share your mood and the weather result on facebook:</p><div class=\"vertical-center\"><input type=\"radio\" name=\"choice\" id=\"P_Current\" checked=\"checked\"/>Post Current Weather<br /><input type=\"radio\" name=\"choice\" id=\"P_Forecast\"/>Post Weather Forecast<br /></div><div class=\"vertical-center\"><a href=\"#\" onclick=\"User_Log()\" ><img src=\"img/facebook.jpg\" class=\"fb_btn\"></a></div>";
    	document.getElementById("yahoo_link").innerHTML="<a href=\"https://www.yahoo.com/news/weather\" target=\"_blank\" ><img src=\"img/news-wea.gif\" class=\"yahoo_link_img\" alt=\"yahoo_weather\"></a>";

    	console.log(data);
      var curTimeArray = data.query.results.channel.lastBuildDate.split(' ');
      var curTimeOld = curTimeArray[4];
      var curTime = curTimeOld.split(':');
      var curHr = parseInt(curTime[0]);
      var curMin = parseInt(curTime[1]);
      var curAmPm = curTimeArray[5];
      
      var sunRiseArray = data.query.results.channel.astronomy.sunrise.split(' ');
      var sunRise = sunRiseArray[0].split(':');
      var sunRiseHr = parseInt(sunRise[0]);
      var sunRiseMin = parseInt(sunRise[1]);

      var sunSetArray = data.query.results.channel.astronomy.sunset.split(' ');
      var sunSet = sunSetArray[0].split(':');
      var sunSetHr = parseInt(sunSet[0]); 
      var sunSetMin = parseInt(sunSet[1]);

      var isDayTime = checkDayOrNight(curHr, curMin, curAmPm, sunRiseHr, sunRiseMin, sunSetHr, sunSetMin);
      if(!isDayTime) {
        console.log("change image");
        document.body.style.backgroundImage = "url(img/night_background.jpg)";
      }
      else {
        document.body.style.backgroundImage = "url(img/day_background.jpg)";
      }
  	});
}
      function checkDayOrNight(curHr, curMin, curAmPm, sunRiseHr, sunRiseMin, sunSetHr, sunSetMin) {
        var isDayTime = true;
        if(curAmPm === 'AM') {
          if(curHr === sunRiseHr) {
            isDayTime = curMin >= sunRiseMin ? true : false;
          }
          else {
            if(curHr === 12) {
              curHr -= 12; // Since the AM is 12:00 instead of 00:00
            }
            isDayTime = curHr > sunRiseHr ? true : false;
          }
        }else {
          if(curHr === sunSetHr) {
            isDayTime = curMin < sunSetMin ? true : false;
          }
          else {
            if(curHr === 12) {
              curHr -= 12;
            }
            isDayTime = curHr < sunSetHr ? true : false;
          }
        }
        return isDayTime;
      }

 window.fbAsyncInit = function() {
    		// init the FB JS SDK
    		FB.init({
     			appId      : '171008926439486',                        // App ID from the app dashboard
      			channelUrl : 'channel.html', // Channel file for x-domain comms
      			status     : true,                                 // Check Facebook Login status
      			xfbml      : true                                  // Look for social plugins on the page
    		});

    // Additional initialization code such as adding Event Listeners goes here
  };
	
function User_Log(){
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + input + "') and u='" + unit +"'&format=json", function(data) {
		
		if(document.getElementById("P_Current").checked){		
			var prop = {
			"Look at details" : {
			"text" : "here",
			"href" : data.query.results.channel.link
			}
		};
		FB.ui({
    	method: 'feed',
    	name: data.query.results.channel.location.city +", " + data.query.results.channel.location.region +", "+ data.query.results.channel.location.country,
    	link: data.query.results.channel.link,
    	picture: weather_icons[data.query.results.channel.item.condition.text],
    	caption: "The current condition for " + data.query.results.channel.location.city +" is " + data.query.results.channel.units.temperature,
    	description: "Temperature is " + data.query.results.channel.item.condition.temp + "&deg;" + data.query.results.channel.units.temperature,
    	properties: prop,
    	message: "Homework 8"
    
  		},
  		function(response) {
    		if (response && response.post_id) {
      			alert('Post was published.');
    		} else {
      			alert('Post was not published.');
    		}
 	 	});
		}	
		else if(document.getElementById("P_Forecast").checked){		
			var prop = {
			"Look at details" : {
			"text" : "here",
			"href" : data.query.results.channel.link
			}
		};
		FB.ui({
    	method: 'feed',
    	name: data.query.results.channel.location.city +", " + data.query.results.channel.location.region +", "+ data.query.results.channel.location.country,
    	link: data.query.results.channel.link,
    	picture: weather_icons[data.query.results.channel.item.condition.text],
    	caption: "Weather Forecast for " + data.query.results.channel.location.city,
    	description: data.query.results.channel.item.forecast[1].date + ": " + data.query.results.channel.item.forecast[1].text + ", " + data.query.results.channel.item.forecast[1].high + "/" + data.query.results.channel.item.forecast[1].low + "&deg;" + data.query.results.channel.units.temperature
    		+ "\n" + data.query.results.channel.item.forecast[2].date + ": " + data.query.results.channel.item.forecast[2].text + ", " + data.query.results.channel.item.forecast[2].high + "/" + data.query.results.channel.item.forecast[2].low + "&deg;" + data.query.results.channel.units.temperature	
    		+ "\n" + data.query.results.channel.item.forecast[3].date + ": " + data.query.results.channel.item.forecast[3].text + ", " + data.query.results.channel.item.forecast[3].high + "/" + data.query.results.channel.item.forecast[3].low + "&deg;" + data.query.results.channel.units.temperature 	
    		+ "\n" + data.query.results.channel.item.forecast[4].date + ": " + data.query.results.channel.item.forecast[4].text + ", " + data.query.results.channel.item.forecast[4].high + "/" + data.query.results.channel.item.forecast[4].low + "&deg;" + data.query.results.channel.units.temperature
    		+ "\n" + data.query.results.channel.item.forecast[5].date + ": " + data.query.results.channel.item.forecast[5].text + ", " + data.query.results.channel.item.forecast[5].high + "/" + data.query.results.channel.item.forecast[5].low + "&deg;" + data.query.results.channel.units.temperature,
    				 
    	properties: prop,
    	message: "Homework 8"    
  		},
  		function(response) {
    		if (response && response.post_id) {
      			alert('Post was published.');
    		} else {
   				alert('Post was not published.');
    		}
  		});
		}
	});
}

  // Load the SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());		

