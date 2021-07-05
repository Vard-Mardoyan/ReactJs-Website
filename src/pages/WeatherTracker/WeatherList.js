import React from 'react'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {

    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-between'}}>
           {weathers.map(({dt, main, weather}) => (
                <div key={dt}>
                    <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon}/>
                </div>
            ))} 

        </div>
    )
}

export default WeatherList;