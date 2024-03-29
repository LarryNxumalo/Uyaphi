// import 'react-native-gesture-handler';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createStackNavigator();

const DestinationNavigator = (props) => {
  return (
	<Stack.Navigator 
		screenOptions={{
			headerShown: false,
		}}
	>
		<Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
	</Stack.Navigator>
  );
};

export default DestinationNavigator;
