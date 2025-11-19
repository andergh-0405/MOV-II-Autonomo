import React from 'react'
import { Alert, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

interface estudiante {
    nombre: string;
    edad: number;
    calificaciones: notas;
}
interface notas {
    nota1: number;
    nota2: number;
    nota3: number;
}

export const PromedioScreen = () => {


    const estudiante1: estudiante = {
        nombre: 'Viviana Perez',
        edad: 20,
        calificaciones: {
            nota1: 10,
            nota2: 9,
            nota3: 9
        }
    };

    const estudiante2: estudiante = {
        nombre: 'Wendy Gomez',
        edad: 18,
        calificaciones: {
            nota1: 8,
            nota2: 7,
            nota3: 9
        }
    };

    const estudiante3: estudiante = {
        nombre: 'Gerson Ruiz',
        edad: 19,
        calificaciones: {
            nota1: 9,
            nota2: 8,
            nota3: 10
        }
    };

    const calcularPromedio = (estudiante: estudiante): number => {
        const { nota1, nota2, nota3 } = estudiante.calificaciones;
        return (nota1 + nota2 + nota3) / 3;
    }

    return (

        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Ver Promedio de cada Estudiante
            </Text>


            <TouchableOpacity style={styles.button}
                onPress={() => {
                    const promedio1 = calcularPromedio(estudiante1);
                    Alert.alert('Promedio',`El promedio de ${estudiante1.nombre} es: ${promedio1.toFixed(2)}`);
                }}>
                <Text style={styles.text1}>
                    Viviana Perez
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    const promedio1 = calcularPromedio(estudiante2);
                    Alert.alert('Promedio',`El promedio de ${estudiante2.nombre} es: ${promedio1.toFixed(2)}`);
                }}>
                <Text style={styles.text1}>
                    Wendy Gomez
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    const promedio1 = calcularPromedio(estudiante3);
                    Alert.alert('Promedio',`El promedio de ${estudiante3.nombre} es: ${promedio1.toFixed(2)}`);
                }}>
                <Text style={styles.text1}>
                    Gerson Ruiz
                </Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4e91ffff'
    },
    textTitle: {
        fontSize: 20,
        textAlign: 'center',
        top: -50,
        color: 'white'
    },
    text1: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    button: {
        color: 'white',
        backgroundColor: '#24bf6fff',
        marginHorizontal: 100,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    }

});