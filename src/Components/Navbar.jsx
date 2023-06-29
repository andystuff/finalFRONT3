/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const{handleTema} = useContext (ContextGlobal);

  return (
    <nav className='navigator'>
      <Link></Link>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contacto</Link>
      <Link to={'/favs'}>Favoritos</Link>
      <button onClick={handleTema} >Cambio de tema</button>
    </nav>
  )
}

export default Navbar