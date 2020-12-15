import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import uuid from 'uuid/v4'
import AddItem from './components/AddItem';





const App = () => {
  const [items, setItems] = useState ([
    {id:uuid(), text: 'View Your Tasks Above'},
  ]);
  const deleteItem = (id) => {
    setItems((prevState) => {
      return prevState.filter(item => item.id != id)
    })
  }
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter some text', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true })
    } else {
      setItems((prevState) => {
        return [
          {text:text, id: uuid()}, ...prevState
        ]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
  }
})
export default App;