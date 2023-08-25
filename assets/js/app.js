const weatherapp = async ( e ) => {

    try{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=958ec13fbcb0029ffa671513d9145347&units=metric`);
    console.log(res.data);

    const humidity = document.querySelector("#humidity");
    humidity.innerHTML = res.data.main.humidity;
    console.log("Humidity: ", res.data.main.humidity);


    const pressure = document.querySelector("#pressure");
    pressure.innerHTML = res.data.main.pressure;
    console.log("Pressure: ", res.data.main.pressure);

    const temp = document.querySelector("#cur-temp");
    temp.innerHTML = res.data.main.temp;
    console.log("Temperature: ", res.data.main.temp);

    const maxTemp = document.querySelector("#max-temp");
    maxTemp.innerHTML = res.data.main.temp_max;
    console.log("Max Temperature: ", res.data.main.temp_max);

    const minTemp = document.querySelector("#min-temp");
    minTemp.innerHTML = res.data.main.temp_min;
    console.log("Min Temperature: ", res.data.main.temp_min);

    const city = document.querySelector("#city");
    city.innerHTML = res.data.name;
    console.log("City: ", res.data.name);

    const country = document.querySelector("#country");
    country.innerHTML = res.data.sys.country;
    console.log("Country: ", res.data.sys.country);

    const sunrise = document.querySelector("#sunrise");
    sunrise.innerHTML = unixTimestampToDate(res.data.sys.sunrise);
    console.log("Sunrise: ", unixTimestampToDate(res.data.sys.sunrise));

    const sunset = document.querySelector("#sunset");
    sunset.innerHTML = unixTimestampToDate(res.data.sys.sunset);
    console.log("Sunsset: ", unixTimestampToDate(res.data.sys.sunset));

    const weather = document.querySelector("#weather");
    weather.innerHTML = res.data.weather[0].description;
    console.log("Weather Description: ", res.data.weather[0].description);


    console.log("Weather Main: ", res.data.weather[0].main);
    
    const windDeg = document.querySelector("#direction");
    windDeg.innerHTML = res.data.wind.deg;
    console.log("Wind Degree: ", res.data.wind.deg);

    const windSpeed = document.querySelector("#speed");
    windSpeed.innerHTML = res.data.wind.speed;
    console.log("Wind Speed: ", res.data.wind.speed);

    if(res.data.weather[0].id >= 200 && res.data.weather[0].id < 300){
        document.body.style.backgroundImage = "url('assets/resources/thunderstorm.jpg')";
    }
    else if (res.data.weather[0].id >=300 && res.data.weather[0].id < 400) {
        document.body.style.backgroundImage = "url('assets/resources/shower-rain.jpg')";
    } 
    else if (res.data.weather[0].id >= 500 && res.data.weather[0].id < 505) {
        document.body.style.backgroundImage = "url('assets/resources/rain.jpg')";
    } 
    else if (res.data.weather[0].id == 511) {
        document.body.style.backgroundImage = "url('assets/resources/snow.jpg')";
    } 
    else if (res.data.weather[0].id >= 520 && res.data.weather[0].id < 600) {
        document.body.style.backgroundImage = "url('assets/resources/shower-rain.jpg')";
    } 
    else if (res.data.weather[0].id >= 600 && res.data.weather[0].id < 700) {
        document.body.style.backgroundImage = "url('assets/resources/snow.jpg')";
    }
    else if (res.data.weather[0].id >=700 && res.data.weather[0].id < 800) {
        document.body.style.backgroundImage = "url('assets/resources/mist.jpg')";
    } 
    else if (res.data.weather[0].id == 800) {
        document.body.style.backgroundImage = "url('assets/resources/clear-sky.jpg')";
    }
    else if (res.data.weather[0].id == 801) {
        document.body.style.backgroundImage = "url('assets/resources/few-clouds.jpg')";
    }
    else if (res.data.weather[0].id == 802) {
        document.body.style.backgroundImage = "url('assets/resources/scattered-clouds.jpg')";
    } 
    else {
        document.body.style.backgroundImage = "url('assets/resources/broken-clouds.jpg')";
        
    }{

    }

    }
    catch (e){
        console.log("ERROR!!!: ", e);
    }
    
};

function unixTimestampToDate(unixTimestamp) {
    
    const dateObj = new Date(unixTimestamp * 1000);
  
    
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');
  
    const dateString = `${day}-${month}-${year}<br>${hours}:${minutes}:${seconds}`;
  
    return dateString;
}

const searchWeather = () => {
    const searchInput = document.querySelector("#search");
    weatherapp(searchInput.value);
}

weatherapp("ahmedabad");

const searchInput = document.querySelector("#search");
searchInput.addEventListener("keypress", (e) => {
    if(e.keyCode === 13){
        searchWeather();
    }
})

