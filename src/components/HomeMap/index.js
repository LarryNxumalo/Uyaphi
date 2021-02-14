import React from "react"
import { View, Text } from "react-native"

const HomeScreen = (props) => {
    return (
        <View  style={{ 
                height: 300, 
                backgroundColor:"#ddd", 
                justifyContent: 'center',
                alignItems: 'center' }}>
            <Text>I am a Map</Text>
        </View>
    );
};

export default HomeScreen;