import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas
       {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30,
    fontWeight: '600',
    color: '#374151'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  }
})



