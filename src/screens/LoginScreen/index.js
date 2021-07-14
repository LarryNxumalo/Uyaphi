import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";

const LoginScreen = () => {
  const [text, onChangeText] = React.useState("");
  const [password, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.safer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="Password"
        keyboardType="ascii-capable"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safer: {
        height: '100%',
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:'#000',
        borderRadius: 27,
        paddingLeft: 10,
        backgroundColor: '#dddddd',
        color: '#000',
        color: 'red'
    },
});

export default LoginScreen;