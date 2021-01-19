var input = document.querySelector(".input-box");
var action = document.querySelector(".action");
var city = document.querySelector(".city-name");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var dayNight = document.querySelector(".day-night");

 function myfunc (){
    var q = input.value;
    var KEY = "ba94c4d1e85eb7c3f7ead9e2427a4cd1";
    if (input.value === "") {
        window.alert("Please, enter a city name")
    } else {
        const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);

                city.innerHTML = `${result.name}`;
                temp.innerHTML = `${Math.round(result.main.temp - 273.15)} &#8451;`;
                wind.innerHTML = `${result.wind.speed} km/h`;
            })
    }

    input.value = "";
}


action.addEventListener('click', myfunc)
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        myfunc()
    }

})