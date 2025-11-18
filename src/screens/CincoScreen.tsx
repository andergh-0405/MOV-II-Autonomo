import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'

export const CincoScreen = () => {

    // useUseState: manejo de estdo
    const [contador, setcontador] = useState<number>(10)



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {contador}</Text>
            <TouchableOpacity style={[styles.button, styles.buttonLoactionIz]}
                onPress={() => setcontador(contador + 1)}>
                <Text style={styles.buttonText}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonLoactionDr]}
                onPress={() => setcontador(contador - 1)}>
                <Text style={styles.buttonText}>-1</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#cfcd2dff'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        top: -50,

    },
    button: {
        backgroundColor: '#b1251bff',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,

    },
    buttonLoactionIz: {
        left: 25
    },
    buttonLoactionDr: {
        right: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})