import React from 'react'
import './GroupInput.css'

const Input = ({type, name, placeholder, content}) => {
  return (
    <div className="group-input">
    <label>{content}{" "}</label>
        <input className="input-form" type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default Input