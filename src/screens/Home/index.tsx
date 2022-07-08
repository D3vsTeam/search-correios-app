import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { getEndereco } from '../../Service/CepService';

// import { Container } from './styles';
const Home: React.FC = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");


  function onChange(valor: string) {
    setCep(valor)
  }

  async function onPressButon(e: any){
    try {
      const {data} = await getEndereco(cep);

      setEndereco(data.logradouro + " - " + data.bairro + ", " + data.localidade )

    } catch (error) {
      
    }
  }

  return (
    <View>
      <TextInput 
        placeholder={"Digite o CEP"}
        onChangeText={onChange}
        value={cep}
      />
      <Button title="CEP" onPress={onPressButon}/>
      <View>
        <Text>{endereco}</Text>
      </View>
    </View>
  );
}

export default Home;