import React, { Component } from "react"
import Header from "./Header"
import Content from "./Content"
import FetchWeather from "../api/FetchWeather"

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {},
            date: new Date(),
            loading: true
        }
    }

    async componentDidMount() {
        await FetchWeather.fetchWeather()
            .then((res) => {
                this.setState({ data: res.data, loading: false })
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        else {

            let temp = Math.round(this.state.data.main.temp);
            let feelsLike = Math.round(this.state.data.main.feels_like)
            let humidity = this.state.data.main.humidity
            let wind = this.state.data.wind.speed;
            let description = this.state.data.weather[0].description
            let icon = `http://openweathermap.org/img/wn/${this.state.data.weather[0].icon}@2x.png`;

            return (
                <div className="main">
                    <Header />
                    <Content>
                        <div className="container">
                            <h1 className="toronto">{this.state.data.name}</h1>
                            <text className="date">{this.state.date.toDateString()}</text>
                            <img className="icon" src={icon} />
                            <text className="description">{description}</text>
                            <text className="temp">{temp}&deg;C</text>
                            <text className="details">Feels like {feelsLike}</text>
                            <text className="details">Humidity {humidity} %</text>
                            <text className="details">Wind {wind} km/h</text>
                        </div>
                    </Content>
                </div>
            )
        }

    }
}


export default Main