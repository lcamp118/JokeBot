import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function NoScreen({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hmm....</Text>
            <Text style={styles.text}>Well, telling jokes is all I can do, I'm afraid.</Text>
            <Text style={styles.text}>So if you don't want to hear a joke, then our time is up!</Text>
            <Text style={styles.text}>Unless....</Text>
            <Text style={styles.text}>You want to hear a joke?</Text>
            <View style={styles.button}>
                <Button title={"Yes"} onPress={()=>navigation.navigate('Concierge')}></Button>
            </View>
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