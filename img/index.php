<!DOCTYPE html>
<html lang="en">
	<head>	
		<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    	<title>Weather Master Project - Yahoo Weather API</title>
    <!-- Bootstrap -->
    	<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="font-awesome-4.6.3/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->

    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

    <!--[if lt IE 9]>

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>

      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

    <![endif]-->

		
		<!--// For YUI
		<link rel="stylesheet" href="http://yui.yahooapis.com/3.13.0/build/cssbutton.css">
		<script type="text/javascript" src="yui-min.js"></script>
		<script src="http://yui.yahooapis.com/3.13.0/build/yui/yui-min.js"></script>  
 		-->

		<!-- <script type="text/javascript" src="js/my_script.js"></script>	 -->
	</head>

	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 form-padding">
					<form id="form" name="searchform" class="hori-center">

						<!-- <span style="color:#fff;">Location:</span></br> -->
						<label for="weatherSearch">Search Weather Here:</label>
						</br>
						<div class="col-md-6 vertical-center">
							
      						<input id="weatherSearch" type="text" class="form-control" name="location" placeholder="Enter a zipcode or a city name">
    					</div>
						<!-- <input type="text" name="location" size="50"> -->
						<div class="vertical-center">
							<input type="button" class="btn btn-search" name="search" value="Search" onClick="yahooWeatherApi(); return false;">
						</div>
						<!-- <input type="button" name="search" value="Search" onClick="WeatherRequest(); return false;"> -->
					</form>

				</div>
			</div>

			<div class="row">
				<div class="col-md-4 col-md-offset-4 city-title">
					<div id="info"> </div>
					<div id="city"> </div>
					<div id="country"> </div>
				</div>				
			</div>
			
			<div class="row">
				<div class="col-md-6 hori-center cur_weather">
					<div class="vertical-center">
						<div id="image"> </div>
						<div id="low_high"> </div>
					</div>
					<div id="temp_now" class="vertical-center"> 
					</div>
				</div>
				<div class="col-md-6">
					<div id="forecast_table" class="col-md-8 col-md-offset-2 hori-center"> </div>
				</div>
			</div>	
			<div class="row"> 
				<div class="col-md-6 col-md-offset-3"> 
					<div id="fb"></div>
				</div>
				<div class="col-md-12">
					<div id="yahoo_link"> </div>
				</div>
			</div>
			
			<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
			<script> window.jQuery || document.write('<script src="js/jquery-3.1.1.js"><\/script>'); </script>
			<script src="js/bootstrap.min.js"></script>
			<script type="text/javascript" src="js/script.js"></script>
		</div>
	</body>
</html>

	