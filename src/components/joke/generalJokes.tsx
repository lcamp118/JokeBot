import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {Animated, Button, Text, View, StyleSheet} from 'react-native'
import useGetJoke from '../hooks/useGetJoke'
import {fadeIn, fadeOut, disappear, appear} from './animations'

export default function GeneralJokes() {
    const [setup, setSetup] = useState()
  const [punchline, setPunchline] = useState()
  const [buttonText, setButtonText] = useState('TELL ME A JOKE!')
  const [timesPressed, setTimesPressed] = useState(0)

  const fadeAnimSetup = useRef(new Animated.Value(0)).current;
  const fadeAnimPunchline = useRef(new Animated.Value(0)).current;
  const buttonAnimFade = useRef(new Animated.Value(1)).current;

  const handlePress = async () => {
    if (timesPressed == 0) {const jsonData = await useGetJoke('general').then((response) => response.json())
    
    setTimesPressed(1)
    disappear(buttonAnimFade)
    setButtonText("I GIVE UP!")
    setSetup(jsonData[0].setup)
    setPunchline(jsonData[0].punchline)
    fadeIn(fadeAnimSetup)
    setTimeout(()=> appear(buttonAnimFade), 6000)}

    if (timesPressed == 1) {
      setTimesPressed(2)
      disappear(buttonAnimFade)
      setButtonText('TELL ME ANOTHER ONE!')
      fadeIn(fadeAnimPunchline)
      setTimeout(()=> appear(buttonAnimFade), 6000)
    }

    if (timesPressed == 2) {
      setTimesPressed(0);
      setSetup(null);
      setPunchline(null);
      fadeOut(fadeAnimSetup);
      fadeOut(fadeAnimPunchline);
      setButtonText('TELL ME A JOKE!')
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnimSetup,
          },
        ]}>
        <Text style={styles.fadingText}>{setup}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnimPunchline,
          },
        ]}>
        <Text style={styles.fadingText}>{punchline}</Text>
      </Animated.View>
      <Animated.View style={ [styles.button, 
        {
          opacity: buttonAnimFade
        },
        ]}><Button title={buttonText} color={'white'} onPress={handlePress}></Button></Animated.View>
      <StatusBar style="auto" />
    </View>
  );
  
};

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
    fadingContainer: {
      padding: 20,
      marginTop: 25,
      marginBottom: 25,
    },
    fadingText: {
      fontSize: 28,
      color: 'white',
    },
    button: {
      backgroundColor: 'purple',
    },
  })