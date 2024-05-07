import React, {useState} from "react"
import { Modal,Text } from "react-native"

const Formulario = () =>{

    const [modalVisible, setModalVisible] = useState(false)

    return(
      <Modal
      animationType='slide'
      visible={modalVisible}
      >
          <Text>Desde Modal</Text>
      </Modal>
    )
}

export default Formulario