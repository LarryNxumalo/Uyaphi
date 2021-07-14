

import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import drivers from "../../assets/data/drivers";

const HomeMap = ({data}) => {

	//dummy car data
	const getImage = (type) =>{
		if ( type === 'YaphiX'){
			return require('../../assets/images/top-UberX.png')
		}
		if ( type === 'Comfort'){
			return require('../../assets/images/top-Comfort.png')
		}
		if ( type === 'Magheza'){
			return require('../../assets/images/top-UberX.png')
		}
		return require('../../assets/images/top-Comfort.png')
	};

    return (
		<MapView
			style={{
				height: "100%", 
				width:"100%",
			}}

			provider={PROVIDER_GOOGLE}
			showsUserLocation={true}
			initialRegion={{
				latitude: -25.964578,
				longitude: 28.028494,
				latitudeDelta: 0.0092,
				longitudeDelta: 0.0091,
			}}>
				{drivers.map((car) => (
				<Marker
					key={car.id}
					coordinate={{latitude: car.latitude,longitude:  car.longitude}}
					>
					<Image style={{ 
						width: 70, 
						height: 70, 
						resizeMode: 'contain', 
						transform: [{
							rotate: `${car.heading}deg`
						}]
					}}
					 source={getImage(car.type)}/>
				</Marker>
				))}
		</MapView>

    );
};

export default HomeMap;

