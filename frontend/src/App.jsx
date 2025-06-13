import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TarjetaPoker } from '../elementos/tarjeta'

function App() {
  const [cartas, setCartas] = useState([]);
  const[cargado, setCargado] = useState(false)

  useEffect(() => {
  fetch("http://127.0.0.1:8000/cartas/")
    .then((res) => {
      if (!res.ok) throw new Error("Error al obtener las cartas");
      return res.json();
    })
    .then((data) => {
      setCartas(data);
      setCargado(true); // ✅ Ya se cargaron los datos
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, []);

  console.log(cartas)

  return (

    <div className= "flex flex-wrap justify-center gap-4 p-4 min-h-screen min-w-screen max-h-screen max-w-screen">

      {cargado && (
        <TarjetaPoker 
          calidad={cartas.calidad} 
          probabilidad={cartas.probabilidad} 
          carta1={cartas.carta1} 
          carta2={cartas.carta2}
        />)
      }

      <TarjetaPoker calidad={2} probabilidad={25} carta1="7h" carta2="10d"/>
      <TarjetaPoker calidad={3} probabilidad={25} carta1="2s" carta2="7c"/>


    </div>
  )
}

export default App
