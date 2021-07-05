import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
  const date = new Date(dt);
  return (
    <div>
      <img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div style={{fontSize:"10px"}}>
        <div>{main}</div>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>min: {temp_min}</p>
        <p>max: {temp_max}</p>
      </div>
    </div>
  );
};
export default WeatherCard;