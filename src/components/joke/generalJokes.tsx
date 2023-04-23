import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {Animated, Button, Text, View, StyleSheet} from 'react-native'
import useGetJoke from '../hooks/useGetJoke'

export default function GeneralJokes() {
    const [setup, setSetup] = useState()
  const [punchline, setPunchline] = useState()
  const [buttonText, setButtonText] = useState('TELL ME A JOKE!')
  const [timesPressed, setTimesPressed] = useState(0)

  const fadeAnimSetup = useRef(new Animated.Value(0)).current;
  const fadeAnimPunchline = useRef(new Animated.Value(0)).current;

  const fadeIn = (fadeAnim) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (fadeAnim) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = async () => {
    if (timesPressed == 0) {const jsonData = await useGetJoke('general').then((response) => response.json())
    
    setTimesPressed(1)
    setButtonText("I GIVE UP!")
    setSetup(jsonData[0].setup)
    setPunchline(jsonData[0].punchline)
    fadeIn(fadeAnimSetup)}

    if (timesPressed == 1) {
      setTimesPressed(2)
      setButtonText('TELL ME ANOTHER ONE!')
      fadeIn(fadeAnimPunchline)
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

  // Add better styles

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
        <Button title={buttonText} color={'white'} onPress={handlePress}></Button>
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
      backgroundColor: 'powderblue',
    },
    fadingText: {
      fontSize: 28,
    },
  })