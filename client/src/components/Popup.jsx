import React from 'react'
import "./Popup.css";
import close from '../images/close.png'

const Popup = ({ children }) => {

  const clickClose = () => {
    console.log('Cerrando...')
  }

  return (
    <div className="container-popup">
      <div className="popup-container">
        <img className="popup-close" src={close} alt="Close" onClick={() => clickClose()}></img>
        {children}
      </div>
    </div>

  )
}

export default Popup
