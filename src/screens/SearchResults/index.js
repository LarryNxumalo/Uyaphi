import React from "react"
import { View, Dimensions } from "react-native"
import styles from './styles'
// import LinearGradient from 'react-native-linear-gradient';
import RouteMap from '../../components/RouteMap';
import UyaphiTypes from '../../components/UyaphiTypes';

import { useRoute } from '@react-navigation/native'

const SearchResults = (props) => {
	const route = useRoute();
	console.log(route.params.originPlace.data.name)
	console.log('props props')
    return (
        <View style={styles.container}>
			<View style={{ height: Dimensions.get('window').height - 500}}>
				<RouteMap/>
			</View>
			<View style={{ height: 500, backgroundColor: 'black'}}>
				<UyaphiTypes/>
			</View>
        </View>
    );
};

export default SearchResults;