import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [ weather, setWeather ] = useState(null)
  const weather_key = process.env.REACT_APP_WEATHER_KEY

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather' +
        `?q=${city}&appid=${weather_key}&units=metric`)
      .then(res => {
        setWeather(res.data)
      })
  }, [weather_key, city])
  
  if (!weather) {
    return (
      <div>
        Loading Weather...
      </div>
    )
  } else {
    const icon_url = 
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
      <div>
        <h2>Weather in {city}</h2>
        <p>
          <strong>Temperature: </strong>
          {weather.main.temp} Celcius
        </p>
        <img src={icon_url} alt='Weather icon' />
        <p>
          <strong>Wind: </strong>
          {weather.wind.speed}{' '} m/s 
          direction {weather.wind.deg} deg
        </p>
      </div>
    )
  }
}
        
export default Weather
