import React, { useState } from 'react';
import './App.css';
import Axios from "axios";
import Weather from './modul/Weather'; // Weather bileşenini import edin

function App() {
  const [city, setCity] = useState(""); 
  const [weather, updateWeather] = useState({}); // Başlangıçta boş bir nesne olarak tanımlıyoruz

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=251f46ebed3b7819fd831da402bebb4b`,
    );
    updateWeather(response.data);
  }

  return (
    <div className='container'>
      <h1 className='AppLabel'>React Weather App </h1>
      <form onSubmit={fetchWeather}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Get Weather</button>
      </form>
      {/* Hava durumu sonuçlarını göstermek için Weather bileşenini kullanın */}
      <Weather weather={weather} />
    </div>
  );
}

export default App;


