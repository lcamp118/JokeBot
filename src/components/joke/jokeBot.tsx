import React, { useRef } from 'react'
import { View, Text, Button, StyleSheet, Animated } from 'react-native'
import { fadeIn } from './animations';

export default function JokeBot(){
   
  
    return (
        <>
        <View style={styles.head}></View>
        <View style={[styles.eyes, styles.leftEye]}></View>
        <View style={[styles.eyes, styles.rightEye]}></View>
        <View style={styles.nose}></View>
        <View style={styles.body}></View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#fff',
      height: 165,
      width: 150,
      borderRadius: 100,
      position: 'absolute',
      top: 210, 
    },
    head: {
      height: 130,
      width: 130,
      backgroundColor: '#fff',
      borderRadius: 100,
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 5,
      position: 'absolute',
      top: 120,
      zIndex: 1,
    },
    nose: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 180,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 5,
        zIndex: 3
    },
    eyes: {
        height: 30,
        width: 30,
        borderRadius: 100,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 3,
        zIndex: 2,
        position: 'absolute',
        top: 168,
    },
    leftEye: {
        left: 158,
    },
    rightEye: {
        right: 158,
    }
  })