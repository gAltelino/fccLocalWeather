$(document).ready(function(){
    getWeather();
});


function getWeather(){ 

    if("geolocation" in navigator){

        navigator.geolocation.getCurrentPosition(function(position){
            darkSkyApi(position.coords.latitude, position.coords.longitude);  
        }) 

    }else{
        console.log("Geo not avaliable");
    }
}
function darkSkyApi(latitude, longitude){

    const key = "713da3163474a17662960c7e636c8068" ;
   
        $.ajax({
            url: 'https://api.darksky.net/forecast/' + key + '/' + latitude + ',' + longitude,
            type: 'ǴET',
            dataType:'JSONP'
        }
                )
        .done(function(data){
        $("#temperature").html(JSON.stringify(data.currently.temperature));

        console.log(data.currently.icon);
        //'<div id="icon"></div>'
        })                
}

function swtichCelsiusfahrenheit(){
    
    if($("#switcher").text() === '°C'){
        $("#switcher").html('°F')
        temperatureToFahrenheit();
    }else{
        $("#switcher").html('°C')
        temperatureToCelcius();
    }}

function temperatureToCelcius(){
    var temperature = $("#temperature").text();
    temperature = (temperature - 32) / 1.8;
    $("#temperature").html(temperature.toFixed(0));
}   

function temperatureToFahrenheit(){
var temperature = $("#temperature").text();
    temperature = (temperature * 1.8) + 32;
    $("#temperature").html(temperature.toFixed(0));
}
