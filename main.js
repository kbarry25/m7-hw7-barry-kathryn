var weatherTextContainer = document.querySelectorAll("#weather-wrapper h2 span");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);

        var name = document.createTextNode(apiResult.name);
        weatherTextContainer[0].appendChild(name);

        var weather = document.createTextNode(apiResult.weather[0].main);
        weatherTextContainer[1].appendChild(weather);


    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=02481,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
