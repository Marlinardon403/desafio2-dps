import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
export default class Factorial extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      primero: '',
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
    
    const {primero} = this.state;

    var numero1 = parseInt(this.state.primero);
    var factorial = 1;

    for(var i = 1; i <= numero1; i++){
      factorial = factorial * i;
    }

    Alert.alert(
      'Calculo del factorial del numero es',
      ` 
    Primer numero: ${primero}
    
    
    El resultado es ${factorial}`,
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
