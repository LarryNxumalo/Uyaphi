import React , {useState, useEffect} from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import styles from './styles.js'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LinearGradient from 'react-native-linear-gradient';
import PlaceRow from "./PlaceRow.js";
import { useNavigation } from "@react-navigation/native"

//Predefined locations
const homePlace = {
	description: 'Home',
	geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
	description: 'Work',
	geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {

    //state variables
	const [originPlace, setOriginPlace] = useState(null);
	const [destinationPlace, setDestinationPlace] = useState(null);

	const navigation = useNavigation();

	useEffect(() => {
		console.warn('useEffect is called from destination');//useEffect is loaded
		if(originPlace && destinationPlace){
			navigation.navigate("SearchResults", {
				originPlace,
				destinationPlace,
			})
		}
	}, [originPlace, destinationPlace]);


    return (
        <SafeAreaView >
            <LinearGradient start={{x: 0, y: 2}} end={{x: 0, y: 0}} colors={['#282828', '#282828']} style={styles.container}>
				<GooglePlacesAutocomplete
						disableScroll={false}
						placeholder='Where from'
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							setOriginPlace({data, details});
							console.log(data.types,details.photos);
						}}
						currentLocation={true}
						currentLocationLabel="Current Location"
						// suppressDefaultStyles
						
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
							radius: '15000', //15km
							components:'country:za',
                            strictbounds: true,
						}}
						renderRow={(data) => <PlaceRow data={data}/>}
						renderDescription={(data) => data.description || data.vicinity}
						predefinedPlaces={[homePlace, workPlace]}
					/>
					<View style={styles.circle}/>
					<View style={styles.line}/>
					<View style={styles.square}/>
						

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
					renderRow={(data) => <PlaceRow data={data} />}
					predefinedPlaces={[homePlace, workPlace]}
				/>
            </LinearGradient>
        </SafeAreaView>

    );
};

export default DestinationSearch;