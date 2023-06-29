import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Tienes dudas?</h2>
      <p>Dame tus datos y te contacto</p>
      <Form/>
    </div>
  )
}

export default Contact