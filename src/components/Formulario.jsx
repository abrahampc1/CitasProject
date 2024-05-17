import React, {useState} from "react"
import { Button, Modal,SafeAreaView,Text, StyleSheet,
    TextInput, View,
    ScrollView} from "react-native"
import DatePicker from "react-native-date-picker"

const Formulario = ({modalVisible}) =>{
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    return(
      <Modal
      animationType='slide'
      visible={modalVisible}
      >
        
        <SafeAreaView style={Styles.contenido}>
            <ScrollView>
            <Text
                style={Styles.titulo}
            >Nueva {''}
                <Text style={Styles.tituloBold}>Cita</Text>
            </Text>

            <View style={Styles.campo}>
                <Text style={Styles.label}>Nombre Paciente</Text>
                <TextInput
                    style={Styles.input} 
                    placeholder='Nombre Paciente'
                    placeholderTextColor={'#666'}
                    value={paciente}
                    onChangeText={setPaciente}
                />
            </View>

            <View style={Styles.campo}>
                <Text style={Styles.label}>Nombre Propietario</Text>
                <TextInput
                    style={Styles.input} 
                    placeholder='Nombre Propietario'
                    placeholderTextColor={'#666'}
                    value={propietario}
                    onChangeText={setPropietario}
                />
            </View>
            
            <View style={Styles.campo}>
                <Text style={Styles.label}>Email Propietario</Text>
                <TextInput
                    style={Styles.input} 
                    placeholder='Email Propietario'
                    placeholderTextColor={'#666'}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={Styles.campo}>
                <Text style={Styles.label}>Teléfono Propietario</Text>
                <TextInput
                    style={Styles.input} 
                    placeholder='Teléfono Propietario'
                    placeholderTextColor={'#666'}
                    keyboardType='phone-pad'
                    value={telefono}
                    onChangeText={setTelefono}
                    maxLength={10}
                />
            </View>
            
            <View style={Styles.campo}>
                <Text style={Styles.label}>Fecha Alta</Text>

                <DatePicker 
                    date={fecha}
                    locale='es'
                />
            </View>

            <View style={Styles.campo}>
                <Text style={Styles.label}>Síntomas</Text>
                <TextInput
                    style={[Styles.input, Styles.sintomasInput]} 
                    placeholder='Síntomas paciente'
                    placeholderTextColor={'#666'}
                    value={sintomas}
                    onChangeText={setSintomas}
                    multiline={true}
                    numberOfLines={4}
                />
            </View>

            </ScrollView>
        </SafeAreaView>
      </Modal>
    )
}

const Styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color:'#FFF'
    },
    tituloBold:{
        fontWeight: '900'
    },
    contenido:{
        backgroundColor: '#6D28D9',
        flex: 1
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30,
    },
    label:{
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
    sintomasInput:{
        height: 100
    }

})

export default Formulario
