import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto';
const API_Key = 'dabd43091243ee5e79e0ebb05c32db35'

class FetchWeather{

    async fetchWeather(){
    return await axios.get(URL,{
        params:{
            units: 'metric',
            APPID: API_Key,
        }})
    };
}

export default new FetchWeather();