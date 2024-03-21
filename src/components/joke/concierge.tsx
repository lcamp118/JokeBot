import React from 'react'
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GeneralJokes from './generalJokes';
const Stack = createNativeStackNavigator();

export default function Concierge({ navigation }) {
    
  return (
    <View>
                {/* <Text>Well, hello there!</Text> */}
                {/* <Text>I am JokeBot.</Text> */}
                <Text>Would you like to hear a joke?</Text>
                <Button title={'General'} color={'white'} onPress={() => navigation.navigate('GeneralJokes')}></Button>
            </View>
  )
}
