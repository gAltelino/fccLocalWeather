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

    getJSON('https://api.darksky.net/forecast/' + key + '/' + latitude + '/' + longitude, function(weather){
        console.log(weather);
    })

}
  