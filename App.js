import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ProvedorTema } from './ContextoTema';
import ComponenteComTema from './ComponenteComTema';
import ComponenteAlterarTema from './ComponenteAlterarTema'

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ProvedorTema>
        <div>
          <ComponenteAlterarTema />
          <ComponenteComTema />
        </div>
      </ProvedorTema>*/}
      {/*<BotaoCallback></BotaoCallback>*/}
      <Contador></Contador>
      {/*ValorDigitado*/}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {useState} from 'react';
import {Button} from 'react-native';

const Contador = () => {
    const [contar,ConfigContador] = useState(0);
    
    return (
      <View>
        <Text>   CONTAGEM: {contar}</Text>
        <br></br>
        <Button
          title="Incrementar"
          onPress={() => ConfigContador(contar+1)}>
        </Button>
        <br></br>
        <Button
          title="Decrementar"
          onPress={() => ConfigContador(contar-1)}>
        </Button>
      </View>
    );
  }

  const BotaoCallback = () => <button onClick={() => alert("O botão foi clicado!")}>Clique em mim</button>;


  const ValorDigitado = () => {
    
    const [valor, setValor] = useState('');
  
    // Função de callback 
    const handleChange = (event) => {
      setValor(event.target.value); // Atualiza o valor
    };
  
    return (
      <div>
        <input
          type="text"
          value={valor} //Recebe o valor
          onChange={handleChange} // Chama o evento callback
        />
        <p>O valor digitado é: {valor}</p>
      </div>
    );
  };
  