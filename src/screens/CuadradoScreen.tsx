import React, { useState } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const CuadradoScreen = () => {

    const [lado, setlado] = useState<number>(0)
    const [area, setarea] = useState<number>(0)

    const calcularArea = () => {
        return lado * lado
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}
            >AREA DE UN CUADRADO</Text>

            <TextInput style={styles.textInput}
                label="Ingrese el lado del cuadrado"
                keyboardType='numeric'
                value={lado.toString()}
                onChangeText={text => setlado(Number(text))}
            />

            <TouchableOpacity
                onPress={() => {
                    const resultado = calcularArea()
                    setarea(resultado)
                    Alert.alert('Area',`El area del cuadrado es: ${resultado}`)
                    setlado(0)
                }}>

                <Text style={styles.button}>CALCULAR</Text>

            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#28501eff'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        top: -50,
        color: 'white'
    },
    textInput: {
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#b1251bff',
        padding: 15,
        marginHorizontal: 100,
        borderRadius: 10,
        marginTop: 20
    },

});
