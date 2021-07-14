/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Router from './src/Navigation/Root';
// import SearchResults from './src/screens/SearchResults';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';

navigator.geolocation = require('@react-native-community/geolocation');


const App: () => React$Node = () => {


	const androidPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
			  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			  {
				title: "Uyaphi Location Permission",
				message:
				  "Uyaphi App needs access to your location " +
				  "so you can start ordering and moving",
				buttonNeutral: "Ask Me Later",
				buttonNegative: "Cancel",
				buttonPositive: "OK"
			  }
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			  console.log("You can use the location");
			} else {
			  console.log("Location permission denied");
			}
		  } catch (err) {
			console.warn(err);
		  }
	}

	useEffect(() => {
		if(Platform.OS === 'android'){
			androidPermission();
		} else {
			//IOS
			Geolocation.requestAuthorization();
		}
	}, [])

	return (
	<>
		<StatusBar barStyle="dark-content" />

		<Router/>
		{/* <HomeScreen/> */}
		{/* <DestinationSearch/> */}
		{/* <SearchResults/> */}
		

	</>
	);
};

export default App;
