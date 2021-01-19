var input = document.querySelector(".input-box");
var action = document.querySelector(".action");
var city = document.querySelector(".city-name");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var dayNight = document.querySelector(".day-night");


action.addEventListener('click', f => {
    var q = input.value;
    var KEY = "ba94c4d1e85eb7c3f7ead9e2427a4cd1";
    if (input.value === "") {
        window.alert("Please, enter a city name")
    } else {
        const data = fetch(`api.openweathermap.org/data/2.5/weather?q=${q}&appid=${KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);

                city.innerHTML = `${result.name}`;
                temp.innerHTML = `${result.main.temp}`;
                wind.innerHTML = `${result.wind.speed} km/h`;
                // if (result.current.is_day === 0) {
                //     dayNight.innerHTML = "Night";
                // } else {
                //     dayNight.innerHTML = "Day";
                // }
            })
    }

    input.value = "";
})