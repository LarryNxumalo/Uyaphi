import React from "react"
import { View, Text } from "react-native"
import styles from './styles'

const CovidMessage = (props) => {
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Travel if neccesary</Text>
            <Text style={styles.text}>Returns your own custom font based on the glyphMap where the key is the icon name and the value is either a UTF-8 character or it's character code. fontFamily is the name of the font NOT the filename. Open the font in</Text>
            <Text style={styles.learnMore}>learn more</Text>
        </View>
    );
};

export default CovidMessage;