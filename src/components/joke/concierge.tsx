import React from 'react'
import {Button, View, Text, StyleSheet} from 'react-native';

export default function Concierge({ navigation }) {
    
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Alright!</Text> 
        <Text style={styles.text}>What kind of joke do you want to hear?</Text>
        <View style={styles.button}>
            <Button title={'General'} color={'white'} onPress={() => navigation.navigate('GeneralJokes')}></Button>
        </View>
        <View style={styles.button}>
            <Button title={'Programming'} color={'white'} onPress={() => navigation.navigate('ProgrammingJokes')}></Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
    },
    button: {
      backgroundColor: 'purple',
    },
  })