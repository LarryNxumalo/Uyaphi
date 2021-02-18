import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles.js";
import LinearGradient from 'react-native-linear-gradient';
import UyaphiTypeRow from "../UyaphiTypeRow";
import typesData from "../../assets/data/types"


const UyaphiTypes = (props) => {

	console.log(typesData)

	const confirm = () => {
		console.warn('confirm');
	}

    return (
		<LinearGradient  start={{x: 44, y: 5}} end={{x: 2, y: 9}} colors={['#414345', '#232526']} style={styles.container}>
			{ typesData.map(type => (
				<UyaphiTypeRow type={type} key={type.id}/>
				))}

			<Pressable onPress={confirm} style={{
				width: "95%",
				backgroundColor: "black",
				padding: 10,
				margin: 10,
				alignSelf: "center",
				alignItems: "center",
				borderRadius: 27,
			}}>
				<Text style={{
					color: "#fff",
					fontWeight: "500"
				}}>
					Confirm Uyaphi
				</Text>
			</Pressable>
        </LinearGradient>
    );
};

export default UyaphiTypes;