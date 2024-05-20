import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, 
  StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import React, {useState} from 'react';
import Formulario from './src/components/Formulario';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas
       {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
      onPress= {() => setModalVisible(true) }
      style={styles.btnNuevaCita}>
        <Text
        style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

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
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 20
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
