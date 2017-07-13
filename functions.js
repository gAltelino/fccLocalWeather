$(document).ready(function(){
    getWeather();
});


function getWeather(){ 

    $("#switcher").addClass('disabled');

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
        $("#switcher").removeClass('disabled');
        backGroundColor();
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

function backGroundColor(){
    var temperature =  $("#temperature").text();
    if (temperature > 77){
        $('body').css('background','lightcoral');
    }if (temperature <= 77 && temperature >= 54) {
        $('body').css('background','lightblue');
    } else {
        $('body').css('background','lightgray');
    }
}
