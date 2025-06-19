import { useState } from 'react';
import './App.css';
import { TarjetaPoker } from '../elementos/tarjeta';
import {TopBar} from '../elementos/topbar'


function App() {
  const [cartas, setCartas] = useState([]);
  const [cargado, setCargado] = useState(false);
  const [cantidad, setCantidad] = useState(2);
  const [modoOscuro, setModoOscuro] = useState(false);


  const toggleModo = () => {
    if(modoOscuro == true){
      setModoOscuro(false)
    }else{
      setModoOscuro(true)
   }
  }

  const fetchear = () => {
    fetch(`http://127.0.0.1:8000/kys/`)
    /*fetch(`http://127.0.0.1:8000/cartas2/${cantidad}`)*/
    
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



  if(modoOscuro==true){
    root.style.setProperty('background-color', '#222222')
    root.style.setProperty('--color-blanco', '#454545')
    root.style.setProperty('--color-negro', '#ffffff')
  }else{
    root.style.setProperty('background-color', '#bbbbbb')
    root.style.setProperty('--color-blanco', '#ffffff') 
    root.style.setProperty('--color-negro', '#000000')
  }

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
      ) : (/*CARTAS CARTAS CARTAS CARTAS CARTAS CARTAS CARTAS CARTAS CARTAS CARTAS CARTAS */
        <>

        <TopBar color={"verdeazul"} onClick={toggleModo}/>

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
        </>
      )}
    </>
  );
}

export default App;