import React , {useState, useEffect} from "react";
import { View, TextInput, SafeAreaView } from "react-native";

import styles from './styles.js'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LinearGradient from 'react-native-linear-gradient';

const DestinationSearch = (props) => {

    //state variables

	const [originPlace, setOriginPlace] = useState(null);
	const [destinationPlace, setDestinationPlace] = useState(null);

	useEffect(() => {
		console.warn('useEffect is called');//useEffect is loaded
		if(originPlace && destinationPlace){
			console.warn('redirect to results');//here we're implementing the navigation
		}
	}, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <LinearGradient start={{x: 0, y: 2}} end={{x: 0, y: 0}} colors={['#07070A', '#232526']} style={styles.container}>
				<GooglePlacesAutocomplete
						disableScroll={false}
						placeholder='Where from'
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							setOriginPlace({data, details});
							console.log(data.types,details.photos);
						}}
						styles={{
							textInput: styles.textInput,
							container: styles.inputOne,
							listView: styles.listView,
							row: styles.row,
							description: styles.description,
							poweredContainer: styles.poweredContainer,
							separator: styles.separator,
							powered: {
								display: "none"
							},
						}}
						fetchDetails
						query={{
							key: 'AIzaSyDcCNaSv-pSO8INeCeHKj68u4Hs_uuQs28',
							language: 'en',
						}}

					/>

				<GooglePlacesAutocomplete
					placeholder='Where to'
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						setDestinationPlace({data, details});
						console.log(data, details);
					}}
					styles={{
						textInput: styles.textInput,
						container: styles.inputTwo,
						listView: styles.listView,
						row: styles.row,
						description: styles.description,
						poweredContainer: styles.poweredContainer,
						separator: styles.separator,
						powered: {
							display: "none"
						},
					}}
					fetchDetails
					query={{
						key: 'AIzaSyDcCNaSv-pSO8INeCeHKj68u4Hs_uuQs28',
						language: 'en',
					}}
				/>
            </LinearGradient>
        </SafeAreaView>

    );
};

export default DestinationSearch;