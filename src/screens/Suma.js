import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
export default class Suma extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      primero: '',
      segundo: '',
    };
  }

  handleInputChangeOne = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        primero: text,
      });
    }
  };

  handleInputChangeTwo = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        segundo: text,
      });
    }
  };


  onClick() {
    
    const {primero, segundo} = this.state;

    var numero1 = parseInt(this.state.primero);
    var numero2 = parseInt(this.state.segundo);

    var suma = numero1 + numero2;

    Alert.alert(
      'Calculo de la suma de los numeros',
      ` 
    Primer numero: ${primero}
    Segundo numero: ${segundo}
    
    El resultado es ${suma}`,
    );
  }

  
  
  render() {
    return (
      <>
        <View style={styles.contenedor}>
          <View style={styles.box1}>
            <Text style={styles.texto}>Ingrese el primer numero</Text>
            <TextInput
              type="number"
              keyboardType="numeric"
              value={this.state.primero}
              onChangeText={primero => this.setState({primero})}
              style={styles.input}
              onChangeText={this.handleInputChangeOne}
            />
            <Text style={styles.texto}>Ingrese el segundo numero</Text>
            <TextInput
              type="number"
              keyboardType="numeric"
              value={this.state.segundo}
              onChangeText={segundo => this.setState({segundo})}
              style={styles.input}
              onChangeText={this.handleInputChangeTwo}
            />
            <Button title={'Calcular'} onPress={this.onClick.bind(this)} />
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#959dff',
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    padding: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#3e882b",
    borderRadius: 10,    
  },
  texto: {
    fontSize: 18,
  },
});
