import React from 'react'
import '../stylesheets/Descriptions.css'
import {WiHumidity, WiStrongWind} from 'react-icons/wi'
import {BiHappyAlt} from 'react-icons/bi'

function Descriptions( { tempUnits, data }) {
    return (
        <div className='section__descriptions'>
            <div className='card'>
                <div className='description__card-icon'>
                    <BiHappyAlt />
                    <small>Feels like</small>
                </div>
                {
                    tempUnits? <h2> {data.current.feelslike_c}ºC</h2>: <h2>{data.current.feelslike_f}ºF</h2>
                }
            </div>
            <div className='card'>
                <div className='description__card-icon'>
                    <WiHumidity />
                    <small>Humidity</small>
                </div>
                <h2>{data.current.humidity}%</h2>
            </div>
            <div className='card'>
                <div className='description__card-icon'>
                    <small>Pressure (mb)</small>
                </div>
                <h2>{data.current.pressure_mb}</h2>
            </div>
            <div className='card'>
                <div className='description__card-icon'>
                    <WiStrongWind />
                    <small>Wind speed (kph)</small>
                </div>
                <h2>{data.current.wind_kph}</h2>
            </div>
        </div>
    )
}

export default Descriptions
