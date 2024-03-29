import React , {useState, useEffect} from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import styles from './styles.js'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LinearGradient from 'react-native-linear-gradient';
import PlaceRow from "./PlaceRow.js";
import { useNavigation } from "@react-navigation/native"

const GOOGLE_MAPS_APIKEY = 'AIzaSyCgL119eAii-qoLTgkc7JTwIMygLWRt-2E';

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
			console.log(originPlace);
			navigation.navigate("SearchResults", {
				originPlace,
				destinationPlace,
			})
		}
	}, [originPlace, destinationPlace]);


    return (
        <SafeAreaView >
            <View  style={styles.container}>
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
							key: GOOGLE_MAPS_APIKEY,
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
					placeholder="Where to"
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						setDestinationPlace({data, details});
						console.log(data, details);
					}}
					styles={{
						placeholder: {color: '#fff'},
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
						key: GOOGLE_MAPS_APIKEY,
						language: 'en',
					}}
					renderRow={(data) => <PlaceRow data={data} />}
					predefinedPlaces={[homePlace, workPlace]}
				/>
            </View>
        </SafeAreaView>

    );
};

export default DestinationSearch;