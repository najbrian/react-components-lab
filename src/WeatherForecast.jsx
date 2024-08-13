import './WeatherForecast.css'
import WeatherData from './WeatherData.jsx'
import WeatherIcon from './WeatherIcon.jsx'

const WeatherForecast = ( {forecasts} ) => {
  return (
    <div className="weather">
      {forecasts.map((forecast, idx) => (
        <div key={idx}>
          <WeatherData day={forecast.day} condition={forecast.conditions} time={forecast.time} />
          <WeatherIcon img={forecast.img} />
        </div>
      ))}
    </div>

  )
}

export default WeatherForecast