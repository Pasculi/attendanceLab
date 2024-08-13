import React from 'react'
import './GroupInput.css'

const Input = ({ type, name, placeholder, content, className}) => {
  const onChange = (evt) => {
    
    console.log({ [evt.target.name] : evt.target.value })

  }
  return (
    <div className="group-input">
      <label htmlFor={name}>{content}{" "}</label>
      <input onChange={onChange} className={className} type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Input