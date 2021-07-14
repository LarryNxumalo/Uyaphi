import React from "react"
import { View, Text } from "react-native"
import styles from './styles'
// import LinearGradient from 'react-native-linear-gradient';

const CovidMessage = (props) => {
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Travel only if neccesary</Text>
            <Text style={styles.text}>Wear your mask and sanitize at all times, Our drivers also have sanitizers to help reduce the spread of COVID-19.</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
};

export default CovidMessage;