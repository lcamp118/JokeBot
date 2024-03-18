import React from 'react'
import {Animated} from 'react-native'

export const fadeIn = (fadeAnim) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  export const fadeOut = (fadeAnim) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1,
      useNativeDriver: true,
    }).start();
  };

  export const disappear = (animValue) => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 1,
      useNativeDriver: true
    }).start();
  }

  export const appear = (animValue) => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1,
      useNativeDriver: true
    }).start();
  }
