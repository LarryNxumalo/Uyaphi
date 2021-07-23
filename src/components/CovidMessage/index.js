import React from "react"
import { View, Text } from "react-native"
import styles from './styles'
// import LinearGradient from 'react-native-linear-gradient';

const CovidMessage = (props) => {
    return (
        <View  style={styles.container}>

            <Text style={styles.title}>Travel only if neccesary, COVID-19 is real</Text>
            <Text style={styles.text}>Stay safe and wear a mask, wash your hands and Sanitize to prevent the spread of the virus</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
};

export default CovidMessage;