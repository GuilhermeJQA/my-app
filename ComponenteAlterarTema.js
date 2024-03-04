
import React, { useContext } from 'react';
import ContextoTema from './ContextoTema';

const ComponenteAlterarTema = () => {
    const { tema, setTema } = useContext(ContextoTema);
  
    const alternarTema = () => {
      setTema(tema === 'escuro' ? 'claro' : 'escuro');
    };
  
    return (
      <div>
        <button onClick={alternarTema}>Alterar Tema</button>
      </div>
    );
  };

  export default ComponenteAlterarTema;