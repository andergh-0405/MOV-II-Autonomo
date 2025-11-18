import React from 'react'
import { Text } from 'react-native-paper'
import { View, StyleSheet, ListRenderItem, FlatList } from 'react-native';

const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const divideCinco = (num: number): number => num / 5;

  


export const DivisionAScreens = () => {
  
const arregloDividido = arreglo.map(divideCinco);

  const renderItem: ListRenderItem<number> = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {item}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Numeros originales:</Text>
      <FlatList
        data={arreglo}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        style={styles.list}
      />
      <Text style={styles.sectionTitle}>Numeros divididos entre 5:</Text>
      <FlatList
        data={arregloDividido}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  list: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#e9ecef',
    padding: 12,
    marginVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  itemText: {
    fontSize: 16,
    color: '#495057',
  },
});
