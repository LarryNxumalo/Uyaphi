import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import drivers from "../../assets/data/drivers";
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDcCNaSv-pSO8INeCeHKj68u4Hs_uuQs28';

const RouteMap = ({ origin, destination }) => {

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };


// const RouteMap = (props) => {

	// const getImage = (type) => {
	// 	if ( type === 'YaphiX'){
	// 		return require('../../assets/images/top-UberX.png')
	// 	}
	// 	if ( type === 'Comfort'){
	// 		return require('../../assets/images/top-Comfort.png')
	// 	}
	// 	if ( type === 'Magheza'){
	// 		return require('../../assets/images/top-UberXL.png')
	// 	}
	// 	return require('../../assets/images/Magheza.jpg')
	// }


    return (
            <MapView
				style={{height: "100%", width:"100%"}}
				provider={PROVIDER_GOOGLE}
				showsUserLocation={true}
				initialRegion={{
					latitude: 28.450627,
    				longitude: -16.263045,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0921,
				}}>
				<MapViewDirections
					origin={originLoc}
					destination={destinationLoc}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={5}
					strokeColor="black"
				/>
				<Marker
					coordinate={origin}
					title={'Origin'}
				/>
				<Marker
					coordinate={destination}
					title={"Destination"}
				/>
			</MapView>
			

    );
};

export default RouteMap;