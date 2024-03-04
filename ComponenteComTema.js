import React, { useContext } from 'react';
import ContextoTema from './ContextoTema';

const ComponenteComTema = () => {
  const { tema } = useContext(ContextoTema);

  return (
    <div style={{ backgroundColor: tema === 'escuro' ? 'black' : 'white', color: tema === 'escuro' ? 'white' : 'black' }}>
      <h1>O tema atual é: {tema}</h1>
    </div>
  );
};

export default ComponenteComTema;
