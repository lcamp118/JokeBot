import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, View, Text, StyleSheet} from 'react-native';
import Concierge from './src/components/joke/concierge';
import NoScreen from './src/components/joke/noScreen';
import GeneralJokes from './src/components/joke/generalJokes'
import ProgrammingJokes from './src/components/joke/programmingJokes';
// import KnockKnockJokes from './src/components/joke/knockKnockJokes';

export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Well, hello there!</Text>
        <Text style={styles.text}>I am JokeBot.</Text>
        <Text style={styles.text}>Would you like to hear a joke?</Text>
        <View style={styles.button}>
          <Button title={'TELL ME A JOKE!'} color={'white'} onPress={() => navigation.navigate('Concierge')}></Button>
        </View>
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
          <Stack.Screen name="NoScreen" component={NoScreen} options={{title: ''}} />
          {/* <Stack.Screen name="KnockKnockJokes" component={KnockKnockJokes} options={{title: ''}} /> */}
          {/* <Stack.Screen name="DadJokes" component={DadJokes} options={{title: ''}} /> */}
          {/* <Stack.Screen name="RandomJokes" component={RandomJokes} options={{title: ''}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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