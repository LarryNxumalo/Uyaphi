import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import drivers from "../../assets/data/drivers";
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDcCNaSv-pSO8INeCeHKj68u4Hs_uuQs28';

const RouteMap = ({ origin, destination }) => {

  const originLoc = {
    latitude: -25.964578,
    longitude: 28.028494 ,
  };

  const destinationLoc = {
    latitude: -25.9735204,
    longitude: 28.0363615,
  };

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