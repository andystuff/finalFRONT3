import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let dentist = JSON.parse(localStorage.getItem("odontologos"));

  return (
    <>
      <h1>Mis odontologos favoritos</h1>
      <div className="card-grid">
      {dentist.map(item => (
          <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
        ))} 
      </div>
    </>
  );
};

export default Favs;
