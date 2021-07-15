import React from "react"
import { View, Text, Pressable} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import {useNavigation} from "@react-navigation/native"

import styles from "./styles.js"

const HomeSearch = (props) => {

	const navigation = useNavigation();
	
	const goToSearch = () => {
		navigation.navigate("DestinationSearch")
	}
	
    return (
        <View style={styles.mainBox}>
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText} >Uyaphi?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#fff'}/>
                    <Text style={styles.text}>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                </View>
            </Pressable>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#fff'}/>
                </View>
                <Text style={styles.destinationText}>Mall of Africa</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#552DF5'}]}>
                    <Entypo name={'home'} size={20} color={'#fff'}/>
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    );
};

export default HomeSearch;