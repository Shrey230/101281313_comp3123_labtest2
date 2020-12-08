import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto';
const API_Key = 'f8a03ba706af0ddc9faab348dcf7356b'

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