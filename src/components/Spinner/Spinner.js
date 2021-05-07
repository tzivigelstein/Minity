import React from 'react'
import './spinner.css'

const Spinner = ({ width, color = '' }) => {
  return (
    <div style={{ width, height: width }} className="sk-folding-cube">
      <div style={{ backgroundColor: color }} className="sk-cube1 sk-cube"></div>
      <div style={{ backgroundColor: color }} className="sk-cube2 sk-cube"></div>
      <div style={{ backgroundColor: color }} className="sk-cube4 sk-cube"></div>
      <div style={{ backgroundColor: color }} className="sk-cube3 sk-cube"></div>
    </div>
  )
}

export default Spinner
