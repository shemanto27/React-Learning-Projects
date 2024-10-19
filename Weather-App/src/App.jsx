import { useState } from "react";
import sun from './images/sun.webp';
import thunder from './images/thunder.webp';
import tornado from './images/Tornado.webp';
import rain from './images/rain_with_cloud.webp';

function App() {

  // defining states
  const [location, setLocation] = useState('Dhaka');
  const [temp, setTemp] = useState('25.6 °C');
  const [weatherCondition, setWeatherCondition] = useState('cloud');
  const [icon, setIcon] = useState(sun);
  
  // API data fetching
  const apiKey = 'd5757c464d1aed3a3d5cbafe849a267e';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

  async function fetchWeatherData(){
    try {
      const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
      const data = await response.json();

      setTemp(`${data.main.temp} °C`);
      setWeatherCondition(data.weather[0].description);

      if(weatherCondition == 'haze'){
        setIcon(sun);
      }
      else if(weatherCondition == 'clear sky'){
        setIcon(sun);
      }
      else if(weatherCondition == 'broken clouds'){
        setIcon(thunder);
      }
      else{
        setIcon(rain);
      }
    } 
    catch (error) {
      console.log(error);
    }
  };

  function setData(e){
    e.preventDefault();

    fetchWeatherData();
  };



 // Current date 
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {year: 'numeric', month:'long',day:'2-digit'});

  return (
    <>
      <center>
      <div className="card w-96 shadow-xl bg-blue-500 mt-14">
        <div className="card-body text-white">

          <p className="text-sm">{formattedDate}</p>
          <h1 className="text-5xl font-bold">{location}</h1>
          <figure>
            <img src={icon} alt="" className="w-3/4 "/>
          </figure>

          <p className="text-3xl font-semibold">{temp}</p>

          <p className="text-2xl">{weatherCondition}</p>

          <form className="flex gap-1" onSubmit={setData}>
          <input required type="text" placeholder="Enter city name" className="input input-bordered w-full max-w-xs text-black" onChange={(e) => {setLocation(e.target.value);}}/>
          <button className="btn btn-warning" type="submit">Go</button>

          </form>


        </div>
      </div>
      </center>
    </>
  )
}

export default App
