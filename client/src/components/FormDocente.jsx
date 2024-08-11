import React from 'react'
import Input from './Input'

const FormDocente = () => {
  return (
    <div>
      <form>
        <Input type='text' name='nombre' placeholder='Ingresa tu nombre' content='Nombre' />
        <Input type='text' name='username' placeholder='User' content='Usuario'/>
        <Input type='email' name='email' placeholder='Email' content='Correo'/>
        <Input type='password' name='nombre' placeholder='password' content='Contraseña'/>
        

      </form>
    </div>
  )
}

export default FormDocente
