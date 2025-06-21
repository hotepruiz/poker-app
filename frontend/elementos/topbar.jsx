import React from 'react'
import './topbar.css'
import '../src/index.css'
import {DropdownMenu} from './menu'

export const TopBar = ({color, onClick}) => {
  return (
    <div className={`topbar !bg-verdeazul !pl-3 !pr-8  !pt-2 !pb-2 flex justify-end`}>
      {"hola como estas"}

      <div className="flex items-center justify-center">

        <DropdownMenu/>



        
        <button
          className="!bg-transparent border-none"
          onClick={onClick}
        >
          <img src="/imagenes/darkmode.png" className="w-8 h-8" alt="modo oscuro" />
        </button>

        


      </div>
      
    </div>
  )
}


