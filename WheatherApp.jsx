import React from "react";
import "./WheatherApp.css";
import cloudy from "../Assest/cloudy.png";
import rain from "../Assest/rain.png";
import snow from "../Assest/snow.jpg";
import humidity from "../Assest/humidity.png";
import searchapp from "../Assest/searchapp.png";
import { CiSearch } from "react-icons/ci";
import { FaWind } from "react-icons/fa";

const WheatherApp = () => {
  let api_key = "081b6dd2f0a69da039b7589176cd85ae";
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&unit=Metric&appid=${api_key}`;
    let response = await fetch(url);

    let data = await response.json();
    console.log(data);
    const humidity = document.getElementsByClassName("humidity-percent");
    console.log(humidity);
    const wind = document.getElementsByClassName("wind-rate");
    console.log(wind);
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temprature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input Type="text" className="cityInput" placeholder="Search"></input>
        <div
          onClick={() => {
            search();
          }}
          className="searchicons"
        >
          <img src={searchapp} className="searchbar" />
        </div>
      </div>
      <div className="Weather-image">
        <img src={cloudy} className="cloudy" />
      </div>

      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt=" " className="icon" />
          <div className="data">
            <div className="humidity-percent">64% </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <FaWind className="icon" />
          <div className="data">
            <div className="wind-rate">64%</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WheatherApp;
