import React, { useState, useEffect } from 'react';
import hotBg from './assets/desert2.png';
import coldBg from './assets/snow.jpg';
import './App.css';
import Descriptions from './components/Descriptions';


function App() {

  const [tempUnits, setTempUnits] = useState(true);
  const [data, setData] = useState();
  const [city, setCity] = useState('Paris')
  const [bg, setBg] = useState(hotBg);

  const API_KEY = '93659dc588fd4a34967173225231003 '

  useEffect(() => {  
    const fetchWeatherData = async (city) => {
      const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
      const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);
        setData(data);

      if(data.current.temp_c < 15){
        setBg(coldBg)
      }
      else{
        setBg(hotBg)
      }
    }
    
    fetchWeatherData();
    setData(data);
  }, [tempUnits, city])
  
  const enterKeyPressed = (e) => {
    if(e.keyCode === 13){
      setCity(e.target.value)
      e.currentTarget.blur();
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <div className='input-container'>
        <input className='input-city' type='text' placeholder='Enter a city ...' onKeyDown={enterKeyPressed}></input>
        <button className='btn' onClick={() => setTempUnits(!tempUnits)}>
        {
          tempUnits? <span> F</span>: <span> C</span>
        }
        </button>
      </div>
      <div className='main-info'>
        <div className='desc'>
          <div> {data.location.name}, {data.location.country}</div>
          <div><img src={data.current.condition.icon} alt='weather icon' /></div>
          <div>{data.current.condition.text}</div>
          </div>
        <div className='temperature'>
        {
          tempUnits? <span> {data.current.temp_c}ºC</span>: <span>{data.current.temp_f}ºF</span>
        }
        </div>
      </div>
      <Descriptions units={tempUnits} data={data}/>
    </div>
  );
}

export default App;
