import './Main.css'
import weather from '../assets/01.png'
export default function Min() {

    const apiKey="fc377b6c97c3bdc3e927040de7d9eeb9";
    const cityName=null;

    async function  searchCity(){

        const inputEle=document.getElementsByClassName("cityInput");
        if(inputEle[0].value===""){
            return 0;
        }

       let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEle[0].value}&units=metric&appid=${apiKey}`);
       let data =await response.json();

       const temp=document.getElementsByClassName("tepm");
       const city=document.getElementsByClassName("city");
       const humidiy=document.getElementsByClassName("humidity-precent");
       const wind=document.getElementsByClassName("wind-speed");
        
        temp[0].innerHTML=data.main.temp;
        city[0].innerHTML=data.name;
        humidiy[0].innerHTML=data.main.humidity;
        wind[0].innerHTML=data.wind.speed;


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

                <img src={weather} />
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