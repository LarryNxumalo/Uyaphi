import React from "react"
import { View, Text } from "react-native"
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';

const CovidMessage = (props) => {
    return (
        <LinearGradient  start={{x: 0, y: 2}} end={{x: 0, y: 0}} colors={['#414345', '#232526']} style={styles.container}>
            <Text style={styles.title}>Travel only if neccesary</Text>
            <Text style={styles.text}>As of 26 March, a new rule for all South African domains ending in .za was implemented. All such domains are required to link to - Do your part. Stay home</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </LinearGradient>
    );
};

export default CovidMessage;