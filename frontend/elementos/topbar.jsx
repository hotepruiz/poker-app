import React from 'react'
import './topbar.css'
import '../src/index.css'

export const TopBar = ({color, onClick}) => {
  return (
    <div className={`topbar !bg-${color} !pl-3 !pr-8 flex justify-end`}>
      {"hola com estas"}

      <div>


        <button
          className="p-0 m-0 !bg-transparent border-none"
          onClick={onClick}
        >
          <img src="/imagenes/darkmode.png" className="w-8 h-8" alt="modo oscuro" />
        </button>

        <button
          className="p-0 m-0 !bg-transparent border-none"
          onClick={onClick}
        >
          <img src="/imagenes/darkmode.png" className="w-8 h-8" alt="modo oscuro" />
        </button>


      </div>
      
    </div>
  )
}


