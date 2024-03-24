import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Animated, Button, View, Text, StyleSheet } from 'react-native';
import Concierge from './src/components/joke/concierge';
import NoScreen from './src/components/joke/noScreen';
import GeneralJokes from './src/components/joke/generalJokes'
import ProgrammingJokes from './src/components/joke/programmingJokes';
// import KnockKnockJokes from './src/components/joke/knockKnockJokes';
import { fadeIn } from './src/components/joke/animations'

export default function App() {

  const Stack = createNativeStackNavigator();

  const text1Fade = useRef(new Animated.Value(0)).current;
  const text2Fade = useRef(new Animated.Value(0)).current;
  const text3Fade = useRef(new Animated.Value(0)).current;
  const buttonFade = useRef(new Animated.Value(0)).current;

  setTimeout(() => fadeIn(text1Fade), 500)
  setTimeout(() => fadeIn(text2Fade), 2500)
  setTimeout(() => fadeIn(text3Fade), 4000)
  setTimeout(() => fadeIn(buttonFade), 5500)

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text1Fade,
          },
        ]}>
          <Text style={styles.text}>Well, hello there!</Text>
        </Animated.View>
        <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text2Fade,
          },
        ]}>
          <Text style={styles.text}>I am JokeBot.</Text>
        </Animated.View>
        <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text3Fade,
          },
        ]}>
          <Text style={styles.text}>Would you like to hear a joke?</Text>
        </Animated.View>
        <Animated.View style={[styles.button, { opacity: buttonFade}]}>
          <Button title={'TELL ME A JOKE!'} color={'white'} onPress={() => navigation.navigate('Concierge')}></Button>
        </Animated.View>
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