import { createContext, useState } from "react";

export const initialState = { 
  temas : {
    claro: {
      nav: 'blueviolet',
      home: 'blanchedalmond',
      footer: 'tomato',
      letra: 'black'
    },
    oscuro: {
      nav: 'blueviolet',
      home: 'darkslategrey',
      footer: 'tomato',
      letra: 'blanchedalmond'
    }
}}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [tema, setTema] = useState (initialState.temas.claro)

  const handleTema = ()=>{
    setTema( (t) => (t === initialState.temas.claro ? initialState.temas.oscuro : initialState.temas.claro))
  }


  return (
    <ContextGlobal.Provider value={{handleTema, tema}}>
      {children}
    </ContextGlobal.Provider>
  );
};
