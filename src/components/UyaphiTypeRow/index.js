import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles.js";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";


const UyaphiTypeRow = (props) => {

	console.log(props);//

	const {type} = props;//
	const getImage = () =>{
		if ( type.type === 'YaphiX'){
			return require('../../assets/images/YaphiX.png')
		}
		if ( type.type === 'Comfort'){
			return require('../../assets/images/Comfort.png')
		}
		if ( type.type === 'Magheza'){
			return require('../../assets/images/Magheza.jpg')
		}
		return require('../../assets/images/SquadXL.png')
	}

    return (
        <View  style={styles.container}>
            <Image  style={styles.image}
                    source={getImage()}/>
            <View style={styles.middleContainer}>
                <Text style={styles.type}>{type.type}{' '}
                    <Ionicons name={'person'} size={16}/>{' '}
                    {type.capacity}
                </Text>
                <Text style={styles.time}>8:03PM drop off</Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'green'}/>
                <Text style={styles.price}>est. R{type.price}</Text>
            </View>
        </View>//End.container
    );
};

export default UyaphiTypeRow;