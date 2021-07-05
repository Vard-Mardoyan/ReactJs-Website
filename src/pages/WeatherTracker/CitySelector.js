import React, {useState} from 'react';
import UseFetch from '../../hooks/UseFetch';
import { API_KEY, API_BASE_URL } from '../../apis/config';
import WeatherList from './WeatherList';
const CitySelector = () => {
    const [city, setCity] = useState('');
    const {data, error, isLoading, setUrl} = UseFetch();

    const getContent = () => {
      if(error) return <h2>Error when fetching: {error}</h2>
      if(!data && isLoading) return <h2>LOADING...</h2>
      if(!data) return null;
      return <WeatherList weathers={data.list} />
    }
    return (
      <>
        <div>
          <div>
            <h1 style={{fontSize: '35px', fontFamily:'sans-serif'}}>Search your city</h1>
          </div>
        </div>
  
        <div>
          <div>
            <input
            style={{margin:'10px', padding: '8px 20px'}}
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </div>
        </div>
  
        <div>
          <div>
            <button  style={{border: 'lightblue',borderRadius:'4px', color:'white', backgroundColor: '#b4b1b1', padding:'8px 20px', margin: '20px'}}

             onClick={() => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)}>submit</button>
              {getContent()}
          </div>
        </div>
      </>
    );
  };

export default CitySelector;