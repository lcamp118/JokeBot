import React, { useEffect, useRef, useState } from 'react'
import {Animated, Button, Text, View, StyleSheet} from 'react-native'
import useGetJoke from '../hooks/useGetJoke'
import {fadeIn, fadeOut, disappear, appear} from './animations'

export default function GeneralJokes({ navigation }) {
  const [setup, setSetup] = useState()
  const [punchline, setPunchline] = useState()
  const [timesPressed, setTimesPressed] = useState(0)

  const fadeAnimSetup = useRef(new Animated.Value(0)).current;
  const fadeAnimPunchline = useRef(new Animated.Value(0)).current;
  const buttonAnimFade = useRef(new Animated.Value(0)).current;
  const yesNoAnimFade = useRef(new Animated.Value(0)).current;
  const fadeAnimText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    useGetJoke('general')
    .then((response) => response.json())
    .then(data => {
      setSetup(data[0].setup)
    setPunchline(data[0].punchline)
    fadeIn(fadeAnimSetup)
    setTimeout(()=> appear(buttonAnimFade), 6000)
  })
  }, [])

  const handlePress = () => {
      setTimesPressed(1)
      disappear(buttonAnimFade)
      fadeIn(fadeAnimPunchline)
      setTimeout(()=> appear(buttonAnimFade), 6000)
      setTimesPressed(0);
      fadeIn(fadeAnimText);
      fadeIn(yesNoAnimFade);
  }

  const handleYesPress = () => {
    setSetup(null);
    setPunchline(null);
    fadeOut(fadeAnimSetup);
    fadeOut(fadeAnimPunchline);
    navigation.navigate('Concierge')
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
        ]}><Button title={"I GIVE UP!"} color={'white'} onPress={handlePress}></Button>
        </Animated.View>
        <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnimText,
          },
        ]}>
        <Text style={styles.fadingText}>Would you like to hear another?</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.button,
          {
            // Bind opacity to animated value
            opacity: yesNoAnimFade,
          },
        ]}>
        <Button title={"Yes!"} onPress={handleYesPress}></Button>
      </Animated.View>
      <Animated.View
        style={[
          styles.button,
          {
            // Bind opacity to animated value
            opacity: yesNoAnimFade,
          },
        ]}>
        <Button title={"No!"} onPress={() => navigation.navigate('NoScreen')}></Button>
      </Animated.View>
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