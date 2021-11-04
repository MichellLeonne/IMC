import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [altura, setAltura] = React.useState(0);
  const [peso, setPeso] = React.useState(0);
  const [imc, setImc] = React.useState(0);
  const [textoResultado, setTextoResultado] = React.useState(null);

  const calcularResultado = (evento) => {

    let x = peso/Math.pow(altura, 2);
    setImc(x);
    if (x<18.5) {
      setTextoResultado("MUITO MAGRO");
    }
    else if (x<24.9) {
      setTextoResultado("SAUDÁVEL");
    }
    else if (x<29.9) {
      setTextoResultado("SOBREPESO");
    }
    else if (x<39.9) {
      setTextoResultado("OBESIDADE");
    }
    else {
      setTextoResultado("OBESIDADE GRAVE");
    }
    
  } 

  function corTexto(x) {
    if (x<18.5) {
      return { color: "blue" };
    }
    else if (x<24.9) {
      return { color: "green" };
    }
    else if (x<29.9) {
      return { color: "orange" };
    }
    else {
      return { color: "red" };
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.containerEntrada}>
        <TextInput 
          placeholder="Altura"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setAltura(valor)}
        />
        
        <TextInput 
          placeholder="Peso"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setPeso(valor)}
        />
      </View>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={calcularResultado}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Calcular
        </Text>
      </TouchableOpacity>

      <Text style={styles.textoResultado}>
        {imc.toFixed(2)}
      </Text>

      <Text style={[styles.textoResultado, {fontSize: 30, fontWeight: "bold"}, corTexto(imc)]}>
        {textoResultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1F2EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  }, 
  containerEntrada: {
    flexDirection: "row"
  },
  campoDeEntrada: {
    fontSize: 40,
    width: "50%",
    height: 80,
    paddingLeft: 10,
    textAlign: "center"
  },
  estiloBotao: {
    backgroundColor: "#6495ED",
    width: "100%"
  },
  estiloTextoBotao: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 30,
    alignSelf: "center",
  },
  textoResultado: {
    color: 'grey',
    fontSize: 60,
    padding: 15
  }
});
