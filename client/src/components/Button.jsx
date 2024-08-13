import React from 'react'
import './Button.css'
const Button = ({ className, type, name, content }) => {
  
  return (
    <>
      <button className={className} type={type} name={name}>{ content }</button>
    </>
  )
}

export default Button
