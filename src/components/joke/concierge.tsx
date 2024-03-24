import React, { useRef } from 'react'
import { Button, View, Text, StyleSheet, Animated } from 'react-native';
import { fadeIn } from './animations';

export default function Concierge({ navigation }) {
    const text1Fade = useRef(new Animated.Value(0)).current;
    const text2Fade = useRef(new Animated.Value(0)).current;
    const buttonFade = useRef(new Animated.Value(0)).current;

    setTimeout(() => fadeIn(text1Fade), 500)
    setTimeout(() => fadeIn(text2Fade), 2000)
    setTimeout(() => fadeIn(buttonFade), 3000)

  return (
    <View style={styles.container}>
        <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text1Fade,
          },
        ]}>
            <Text style={styles.text}>Alright!</Text>
        </Animated.View>
        <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text2Fade,
          },
        ]}>
            <Text style={styles.text}>What kind of joke do you want to hear?</Text>
        </Animated.View>
        <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: buttonFade,
          },
        ]}>
            <View style={styles.button}>
                <Button title={'General'} color={'white'} onPress={() => navigation.navigate('GeneralJokes')}></Button>
            </View>
            <View style={styles.button}>
                <Button title={'Programming'} color={'white'} onPress={() => navigation.navigate('ProgrammingJokes')}></Button>
            </View>
        </Animated.View>
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