import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, View, Text} from 'react-native';
import ProgrammingJokes from './src/components/joke/programmingJokes';

export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen() {

    const handlePress = () => {
      console.log('test')
    }
    return (
<View>
<Text>Well, hello there!</Text>
<Text>I am JokeBot.</Text>
<Text>Would you like to hear a joke?</Text>

<Button title={'TELL ME A JOKE!'} color={'white'} onPress={handlePress}></Button>
</View>
    );
  }
  

  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        {/* <Stack.Screen name="Profile" component={ProgrammingJokes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
