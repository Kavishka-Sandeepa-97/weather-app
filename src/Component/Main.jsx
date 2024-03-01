import './Main.css'
import normalWeatherIcon from '../assets/normal_icon.jpg'
import rainIcon from '../assets/rain_icon.png'
import snowIcon from '../assets/snow_icon.png'
import clearSun from '../assets/clear_sun_icon.png'
import fewCloud from '../assets/Cloudy_Icon.png'
import { useState } from 'react';
export default function Min() {

    const apiKey="fc377b6c97c3bdc3e927040de7d9eeb9";
    const cityName=null;

    const[icon,changeIcon]=useState(normalWeatherIcon);

    async function  searchCity(){

        const inputEle=document.getElementsByClassName("cityInput");
        if(inputEle[0].value===""){
            return 0;
        }

       let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEle[0].value}&units=metric&appid=${apiKey}`);
       let data =await response.json();

       if(data.weather[0].icon==="09n"||data.weather[0].icon==="09d"||data.weather[0].icon==="10n"||data.weather[0].icon==="10d"||data.weather[0].icon==="11n"||data.weather[0].icon==="11d"){
            changeIcon(rainIcon);
       }else if(data.weather[0].icon==="13n"||data.weather[0].icon==="13d"){
            changeIcon(snowIcon);
       }else if(data.weather[0].icon==="01n"||data.weather[0].icon==="01n"){
            changeIcon(clearSun);
       }else if(data.weather[0].icon==="02n"||data.weather[0].icon==="02n"){
        changeIcon(fewCloud);
     }else{
            changeIcon(normalWeatherIcon);
       }

       const temp=document.getElementsByClassName("tepm");
       const city=document.getElementsByClassName("city");
       const humidiy=document.getElementsByClassName("humidity-precent");
       const wind=document.getElementsByClassName("wind-speed");
        
        temp[0].innerHTML=data.main.temp+"°C";
        city[0].innerHTML=data.name;
        humidiy[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+" Km/h";


    }

    return (
        <div className="container mt-2 dec">
            <div className='row'>
                <div className='col-6'>
                    <input  type="text" className="form-control mt-5 cityInput" id="exampleFormControlInput1" placeholder="City Name"></input>
                </div>
                <div className=' col-6'>
                    <button onClick={()=>{searchCity()}} type="button" className="btn btn-warning btnCustom btn-x ">Search</button>
                </div>

            </div>


            <div className='center'>

                <img src={icon} />
                <h1 className='tepm'>24°C</h1>
                <h3 className='city'>London</h3>

            </div>

            <div className='bottom row'>
                <div className='humidity col-6'>
                    <i class="bi bi-body-text humidity-icon"></i>
                    <h4 className='humidity-precent'>74%</h4>
                    <h5>Humidity</h5>

                </div>
                <div className='wind col-6'>
                    <i className="bi bi-wind wind-icon"></i>
                    <h4 className='wind-speed'>24 kmph</h4>
                    <h5>Wind Speed</h5>

                </div>
            </div>


        </div>

    )

}