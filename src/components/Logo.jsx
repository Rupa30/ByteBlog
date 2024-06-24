import React from 'react'
import logo from '../assets/logo.svg'

function Logo({width = '50px'}) {
  return (
    <div>
      <img src={logo} alt="logo" style={{width}} />
    </div>
  )
}

export default Logo
