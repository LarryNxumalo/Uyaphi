import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import drivers from "../../assets/data/drivers";
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCgL119eAii-qoLTgkc7JTwIMygLWRt-2E';

const RouteMap = ({ origin, destination }) => {

  const originLoc = {
	  latitude: origin.details.geometry.location.lat,
	  longitude: origin.details.geometry.location.lng,
	}

  const destinationLoc = {
	  latitude: destination.details.geometry.location.lat,
	  longitude: destination.details.geometry.location.lng,
	}
  
    return (
            <MapView
				style={{height: "100%", width:"100%"}}
				provider={PROVIDER_GOOGLE}
				showsUserLocation={true}
				initialRegion={{
					latitude: -25.965909,
    				longitude: 28.023506 ,
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
					coordinate={originLoc}
					title={'Origin'}
				/>
				<Marker
					coordinate={destinationLoc}
					title={"Destination"}
				/>
			</MapView>
			

    );
};

export default RouteMap;