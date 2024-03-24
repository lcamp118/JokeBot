import React from 'react'
import { View, Text, Button } from 'react-native'

export default function NoScreen({ navigation }){
    return (
        <View>
            <Text>Hmm....</Text>
            <Text>Well, telling jokes is all I can do, I'm afraid.</Text>
            <Text>So if you don't want to hear a joke, then our time is up!</Text>
            <Text>Unless....</Text>
            <Text>You want to hear a joke?</Text>
            <Button title={"Yes"} onPress={()=>navigation.navigate('Concierge')}></Button>
        </View>
    )
}