import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({addItem}) => {
    const [text, setText] = useState('')

    const onChange = (val) => {
        return (
            setText(val)
        )
    }
  return (
    <View >
        <TextInput 
            placeholder='Add Item...'
            style={styles.input}
            onChangeText={onChange}
        />
        <TouchableOpacity style={styles.btn}
            onPress={()=> addItem(text)}    
        >
            <Text style={styles.btnText}>
                <Icon name='plus'size={20}/> Add item</Text>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create ({
    input: {
        height:80,
        padding: 8,
        fontSize: 20,
    }, 
    btn:{
        backgroundColor:'purple',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color:'white',
        fontSize: 20,
        textAlign: 'center',
    }
})
export default AddItem;