// src/components/colorpicker.jsx
import React from 'react'

export const ColorPicker = ({ label, variable, color, setColor }) => {
  
  
  const manejarCambio = (e) => {
    const newColor = e.target.value
    setColor(newColor)
    document.documentElement.style.setProperty(`--color-${variable}`, newColor)
  }

  return (
    <div className="flex flex-row items-center justify-center gap-2 py-1">
      <label className="text-black font-dobra">{label}:</label>
      <input
        type="color"
        value={color}
        onChange={manejarCambio}
        className="cursor-pointer rounded-lg"
      />
    </div>
  )
}
