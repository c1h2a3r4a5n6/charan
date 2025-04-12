
let input = document.getElementById("city")
let searchBtn = document.querySelector("#search")

searchBtn.addEventListener("click", () => {
    let city = input.value
    if (!city.trim()) {
        alert("write a city before searching")
    }
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b5ff3a3712d9379bd78c619fe3f40e8&units=metric`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
                else {
                    alert("Enter valid city Name")
                }
            })
            .then(data => {
                console.log(data)
                if (data) {
                    displayWeather(data)
                }
            })
            .catch(error => console.log(error))
    }

})

function displayWeather(data) {
    document.getElementById("city-name").innerHTML = data.name
    document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)} ℃`
    document.getElementById("wind").innerHTML = `${Math.round(data.wind.speed)} km/hr`
    document.getElementById("display").classList.replace("hidden", "flex")
}