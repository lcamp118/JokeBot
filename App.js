import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, View, Text} from 'react-native';
import Concierge from './src/components/joke/concierge';
import GeneralJokes from './src/components/joke/generalJokes'
import ProgrammingJokes from './src/components/joke/programmingJokes';
// import KnockKnockJokes from './src/components/joke/knockKnockJokes';

export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {

    const handlePress = () => {
      console.log('test')
    }
    return (
<View>
<Text>Well, hello there!</Text>
<Text>I am JokeBot.</Text>
<Text>Would you like to hear a joke?</Text>

<Button title={'TELL ME A JOKE!'} color={'white'} onPress={() => navigation.navigate('Concierge')}></Button>
</View>
    );
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: ''}} />
          <Stack.Screen name="Concierge" component={Concierge} options={{title: ''}} />
          <Stack.Screen name="GeneralJokes" component={GeneralJokes} options={{title: ''}} />
          <Stack.Screen name="ProgrammingJokes" component={ProgrammingJokes} options={{title: ''}} />
          {/* <Stack.Screen name="KnockKnockJokes" component={KnockKnockJokes} options={{title: ''}} /> */}
          {/* <Stack.Screen name="DadJokes" component={DadJokes} options={{title: ''}} /> */}
          {/* <Stack.Screen name="RandomJokes" component={RandomJokes} options={{title: ''}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
