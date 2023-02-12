import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonLink.scss'

function ButtonLink({ children, to, style, handleClick }) {
  return (
    <button className='buttonLink' handleClick={handleClick}>
      <Link style={style} to={to} className='Lin'>
        {children}
      </Link>
    </button>
  )
}

export default ButtonLink