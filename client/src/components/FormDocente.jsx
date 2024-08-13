import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import './Form.css'


const FormDocente = () => {

  const usuarioDocente = {
    nombre: 'Jorge',
    apellido: '',
    correo: '',
  }

  const [form, setForm] = useState(usuarioDocente)

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log({usuarioDocente} )
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <Input className='input-form-primary' type='text' name='nombre' placeholder='Nombres' content='Nombres' form={form} setForm={setForm} />
      <Input className='input-form-primary' type='text' name='apellido' placeholder='Apellidos' content='Apellidos' form={form} setForm={setForm} />
      <Input className='input-form-primary' type='email' name='correo' placeholder='Email' content='Correo' form={form} setForm={setForm} />
      <Button className='bt button-primary' name='btn-docente' type='submit' content='Guardar Docente' />
    </form>
  )
}

export default FormDocente
