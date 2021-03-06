import React from 'react'
import './spinner.css'

const Spinner = ({ width, height }) => {
  return (
    <div style={{ height: height, width: width }} class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
  )
}

export default Spinner
