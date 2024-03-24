import React from 'react'
import {Button, View, Text} from 'react-native';

export default function Concierge({ navigation }) {
    
  return (
    <View>
        <Text>Alright!</Text> 
        <Text>What kind of joke do you want to hear?</Text>
        <Button title={'General'} color={'white'} onPress={() => navigation.navigate('GeneralJokes')}></Button>
        <Button title={'Programming'} color={'white'} onPress={() => navigation.navigate('ProgrammingJokes')}></Button>
    </View>
  )
}
