import './Main.css'
import weather from '../assets/01.png'
export default function Min() {
    return (
        <div className="container mt-2 dec">
            <div className='row'>
                <div className='col-6'>
                    <input type="email" className="form-control mt-5" id="exampleFormControlInput1" placeholder="Country"></input>
                </div>
                <div className=' col-6'>
                    <button type="button" className="btn btn-warning btnCustom btn-x ">Search</button>
                </div>

            </div>


            <div className='center'>

                <img src={weather} />
                <h1>24 C</h1>
                <h3>London</h3>

            </div>

            <div className='bottom row'>
                <div className='humidity col-6'>
                <i class="bi bi-body-text humidity-icon"></i>
                <h4>74%</h4>
                <h5>Humidity</h5>

                </div>
                <div className='wind col-6'>
                    <i className="bi bi-wind wind-icon"></i>
                    <h4>24 kmph</h4>
                    <h5>Wind Speed</h5>
                
                </div>
            </div>


        </div>

    )

}