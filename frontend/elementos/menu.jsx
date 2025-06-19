// src/components/DropdownMenu.jsx
import React, { useState, useRef, useEffect } from 'react'
import { ColorPicker } from './colorpicker'

export const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // Estados de los colores
  const [colorBueno, setColorBueno] = useState('#59aF55')      // naranja
  const [colorRegular, setColorRegular] = useState('#FFFF00')  // crema-amarillo
  const [colorMalo, setColorMalo] = useState('#ef2929')        // rojo

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="relative flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="!bg-transparent border-none"
      >
        Abrir menú
      </button>

      {open && (
        <div className="p-4 flex flex-col gap-2 absolute right-0 mt-2 w-40 bg-white border rounded shadow z-10">
          <ColorPicker label="Bueno" variable="verde" color={colorBueno} setColor={setColorBueno} />
          <ColorPicker label="Regular" variable="amarillo" color={colorRegular} setColor={setColorRegular} />
          <ColorPicker label="Malo" variable="rojo-carta" color={colorMalo} setColor={setColorMalo} />
        </div>
      )}
    </div>
  )
}
