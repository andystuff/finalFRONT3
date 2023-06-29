/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detalle, setDetalle] = useState({});

  const params = useParams();

  async function handleFetch(){
    const response = await(
      await fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`)
      ).json()
      setDetalle(response)
  }

  useEffect (()=>{
    handleFetch()
  }, []);


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <section>
    <h1>Detalle del odontologo</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Pagina web</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{detalle.name}</td>
          <td>{detalle.email}</td>
          <td>{detalle.phone}</td>
          <td>{detalle.website}</td>
        </tr>
      </tbody>
    </table>
    </section>
      
    </>
  )
}

export default Detail