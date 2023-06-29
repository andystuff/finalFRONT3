/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-concat */
import React from "react";

import { Link } from "react-router-dom";
import img from "../images/doctor.png"



const Card = ({ name, username, id }) => {

  const dentista = {
    id,
    name,
    username
  };

  const addFav = ()=>{
    const dentistas = JSON.parse(localStorage.getItem('odontologos') || '[]')
    
    const dentistaFav = dentistas.find((diente)=> diente.id === dentista.id);
    if (dentistaFav){
      alert(`error!! ${dentista.name} ya es Favorito`)
      return
    }


  dentistas.push(dentista)
  localStorage.setItem('odontologos',JSON.stringify(dentistas))
  }
  console.log('agregando un dentista' + ' ' + dentista.id);

  return (
    <div className="card">
        
        <img className="imagen" src={img} alt="imagen-doctor" />
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>usuario: {username}</h3>
        <button onClick={addFav} className="favButton">Añadir a favoritos 💚 </button>
    </div>
  );
};

export default Card;
