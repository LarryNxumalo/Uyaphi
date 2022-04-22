import React, {useState, useEffect}  from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles.js";
import LinearGradient from 'react-native-linear-gradient';
import UyaphiTypeRow from "../UyaphiTypeRow";
import typesData from "../../assets/data/types"
import { useNavigation } from "@react-navigation/native"


const UyaphiTypes = (props) => {

	console.warn(typesData)

	//state variables
	const [typeOfCar, setTypeOfCar] = useState([]);


	const navigation = useNavigation();

	const confirm = () => {
		if(typesData[0]){
			console.warn(typesData)
		} else {
			console.log(typesData[0], "else")
		}
		
	}

    return (
		<View  style={styles.container}>

			{ typesData.map(type => (<UyaphiTypeRow type={type} key={type.id} />  ))}

			<Pressable onPress={confirm} style={{
				width: "100%",
				backgroundColor: "#F93A00",
				padding: 10,
				margin: 10,
				alignSelf: "center",
				alignItems: "center",
				borderRadius: 27,

			}}>
				<Text style={{
					color: "#fff",
					fontWeight: "700",
					
				}}>
					Confirm Uyaphi
				</Text>
			</Pressable>
        </View>
    );
};

export default UyaphiTypes;