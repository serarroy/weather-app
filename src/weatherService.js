const API_KEY = 'e3fbb0774fb24082109b4aeda151a77b'

const getWeatherData = async (city, units = 'metric') => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);
}

export {getWeatherData};