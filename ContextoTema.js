import React, { createContext, useState } from 'react';

const ContextoTema = createContext();


export const ProvedorTema = ({ children }) => {
  const [tema, setTema] = useState('escuro'); 

  return (
    <ContextoTema.Provider value={{ tema, setTema }}>
      {children}
    </ContextoTema.Provider>
  );
};

export default ContextoTema;