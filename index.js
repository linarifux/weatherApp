var input = document.querySelector(".input-box");
var action = document.querySelector(".action");
var city = document.querySelector(".city-name");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var dayNight = document.querySelector(".day-night");


action.addEventListener('click', f => {
    var q = input.value;
    var KEY = "9e6fba673a9368e1f54a9d58ba97dc2f";
    var BASE = "http://api.weatherstack.com/";
    if (input.value === "") {
        window.alert("Please, enter a city name")
    } else {
        fetch(`${BASE}/current.json?key=${KEY}&q=${q}`)
            .then(response => response.json())
            .then(boom => {
                city.innerHTML = `${boom.location.name}`;
                temp.innerHTML = `${boom.current.temperature} &#8451;`;
                wind.innerHTML = `${boom.current.wind_speed} km/h`;
                if (boom.current.is_day === 0) {
                    dayNight.innerHTML = "Night";
                } else {
                    dayNight.innerHTML = "Day";
                }
            })
    }

    input.value = "";
})
