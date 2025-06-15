import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TarjetaPoker } from '../elementos/tarjeta';

function App() {
  const [cartas, setCartas] = useState([]);
  const [cargado, setCargado] = useState(false);
  const [cantidad, setCantidad] = useState(2);


  const fetchear = () => {
    fetch(`http://127.0.0.1:8000/cartas2/${cantidad}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener las cartas");
        return res.json();
      })
      .then((data) => {
        setCartas(data.jugadores);
        setCargado(true); // ✅ Ya se cargaron los datos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log(cartas);

  return (
    <>
      {!cargado ? (
        <div>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={fetchear}
          >
            Cargar cartas
          </button>

          <input
            type="number"
            min="1"
            max="10"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 mr-4"
          />

        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 p-4 min-h-screen min-w-screen max-h-screen max-w-screen">
          
          
          {cartas.map((jugador, index) => (
            <TarjetaPoker
              key={index}
              calidad={jugador.calidad}
              probabilidad={jugador.probabilidad}
              carta1={jugador.carta1}
              carta2={jugador.carta2}
            />
          ))}


        </div>
      )}
    </>
  );
}

export default App;