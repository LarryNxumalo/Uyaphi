

import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import cars from "../../assets/data/cars";

const HomeMap = (props) => {

	// const getImage = (type) => {
	// 	if ( type === 'YaphiX'){
	// 		return require('../../assets/images/top-UberX.png')
	// 	}
	// 	if ( type === 'Comfort'){
	// 		return require('../../assets/images/top-Comfort.png')
	// 	}
	// 	if ( type === 'SquadXL'){
	// 		return require('../../assets/images/top-UberXL.png')
	// 	}
	// 	return require('../../assets/images/Magheza.jpg')
	// }


    return (
		<MapView
			style={{height: "100%", width:"100%"}}
			provider={PROVIDER_GOOGLE}
			initialRegion={{
				latitude: 28.450627,
				longitude: -16.263045,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0921,
			}}>
			{/* {cars.map((car) => { */}

				<Marker
					// key={car.id}
					coordinate={{latitude: 28.450627,longitude:  -16.263045}}
					image={require('../../assets/images/top-Comfort.png')}
				/>


			{/* })} */}

		</MapView>

    );
};

export default HomeMap;

