import { useEffect, useState } from "react"

export const TarjetaPoker = ({carta1, carta2, calidad, probabilidad}) => {
  

  let colorFondo = getColorFondo(calidad);
  let elementosCarta1 = elementosCarta(carta1);
  let elementosCarta2 = elementosCarta(carta2);



  return (
    <div className={`flex flex-auto tarjeta-externa items-center ${colorFondo}`}>
        <div className="flex flex-row tarjeta-interna h-full w-full">
            
            <div className="flex flex-col h-full items-center justify-center anchura-mitad">
               

               {/* Carta 1 */}
               <div className="flex flex-row h-full w-full text-4xl items-center justify-center">              
                    <div className={`font-dobra ${elementosCarta1[0]} text-8xl h-full anchura-mitad`}>
                        {elementosCarta1[2]}
                    </div>
                    <img src={`/imagenes/${elementosCarta1[1]}`} alt="Corazón" className="h-full anchura-mitad p-2"/>
               </div>

               {/* Carta 2 */}
                <div className="flex flex-row h-full w-full text-4xl items-center justify-center">              
                    <div className={`font-dobra ${elementosCarta2[0]} text-8xl h-full anchura-mitad`}>
                        {elementosCarta2[2]}
                    </div>
                    <img src={`/imagenes/${elementosCarta2[1]}`} alt="Corazón" className="h-full anchura-mitad p-2"/>
               </div>


            </div>


            <div className="flex flex-col h-full items-center justify-center anchura-mitad">

                <div className="font-dobra text-8xl text-black">
                    %{probabilidad}
                </div>

            </div>
            

        </div>
    </div>
  );
};






//------------------------------------------------------------------------------------------------------------
function getColorFondo(calidad){
    let colorFondo = '';
    switch(calidad){
    case 1: 
        colorFondo = '!bg-verde';
        break;
    case 2: 
        colorFondo = '!bg-amarillo';
        break;
    case 3: 
        colorFondo = '!bg-rojo';
        break;
    default:
        colorFondo = '!bg-verde';
    }

    return colorFondo;
}


function elementosCarta(carta){
    let CartaParseada = {};
    CartaParseada = parseCarta(carta);
    

    let colorTexto="";
    let foto="";

    switch(CartaParseada.palo){
        case "c"://clubs
            colorTexto="text-black";
            foto="trevol.png";
            break;

        case "s"://espadas o picas
            colorTexto="text-black";
            foto="pica.png";
            break;

        case "d"://diamantes
            colorTexto="text-rojo";
            foto="diamante.png";
            break;

        case "h"://corazoin
            colorTexto="text-rojo";
            foto="corazon.png";
            break;

        default:
            colorTexto="text-black";
            foto="trevol.png";
    }

    return [colorTexto, foto , CartaParseada.valor]
}

function parseCarta(carta) {
  const match = carta.match(/^([2-9]|10|[jqka])([cdhs])$/i);

  if (!match) {
    throw new Error(`Formato inválido de carta: "${carta}"`);
  }

  const valor = match[1].toLowerCase(); // ejemplo: "10" o "j"
  const palo = match[2].toLowerCase();  // ejemplo: "p"

  return { valor, palo };
}