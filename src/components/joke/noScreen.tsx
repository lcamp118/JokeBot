import React, { useRef } from 'react'
import { View, Text, Button, StyleSheet, Animated } from 'react-native'
import { fadeIn } from './animations';

export default function NoScreen({ navigation }){
    const text1Fade = useRef(new Animated.Value(0)).current;
    const text2Fade = useRef(new Animated.Value(0)).current;
    const text3Fade = useRef(new Animated.Value(0)).current;
    const text4Fade = useRef(new Animated.Value(0)).current;
    const text5Fade = useRef(new Animated.Value(0)).current;
    const buttonFade = useRef(new Animated.Value(0)).current;

    setTimeout(() => fadeIn(text1Fade), 500)
    setTimeout(() => fadeIn(text2Fade), 2500)
    setTimeout(() => fadeIn(text3Fade), 4000)
    setTimeout(() => fadeIn(text4Fade), 5500)
    setTimeout(() => fadeIn(text5Fade), 7000)
    setTimeout(() => fadeIn(buttonFade), 8500)
  
    return (
        <View style={styles.container}>
             <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text1Fade,
          },
        ]}>
            <Text style={styles.text}>Hmm....</Text>
        </Animated.View>
         <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text2Fade,
          },
        ]}>
            <Text style={styles.text}>Well, telling jokes is all I can do, I'm afraid.</Text>
        </Animated.View>
         <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text3Fade,
          },
        ]}>
            <Text style={styles.text}>So if you don't want to hear a joke, then our time is up!</Text>
        </Animated.View>
         <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text4Fade,
          },
        ]}>
            <Text style={styles.text}>Unless....</Text>
        </Animated.View>
         <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: text5Fade,
          },
        ]}>
            <Text style={styles.text}>You want to hear a joke?</Text>
        </Animated.View>
        <Animated.View style={[styles.button, { opacity: buttonFade}]}>
            <Button title={"Yes"} onPress={()=>navigation.navigate('Concierge')}></Button>
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