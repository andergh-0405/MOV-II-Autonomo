import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'

const numeros: number[] = [8, 18, 28, 38, 48, 58];

const calcularSuma = (arreglo: number[]): number => {
  let total = 0;
  for (let i = 0; i < arreglo.length; i++) {
    total += arreglo[i]; 
  }
  return total;
};

export const SumaAScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>SUMA DE ARREGLO</Text>
    <Text style={styles.text}>[8-18-28-38-48-58-68]</Text>

    <TouchableOpacity
        onPress={() => {
            const resultado = calcularSuma(numeros);
            alert(`La suma del arreglo es: ${resultado}`);
        }}
    >
        <Text style={styles.button}>Ver el Total</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',   
        backgroundColor: '#574deaff'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        top: -50,
        color: 'white'
    },
    button:{
        backgroundColor: '#1b9aeeff',
        marginHorizontal: 100,
        marginVertical: 10,
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 10,
    }
});
