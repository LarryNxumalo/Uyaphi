// import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer'
// import HomeScreen from '../screens/HomeScreen';
// import DestinationSearch from '../screens/DestinationSearch';
// import SearchResults from '../screens/SearchResults';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
	<View 
		style={{
			flex: 1, justifyContent: 'center', 
			alignItems: 'center', 
			backgroundColor: '#0D0266'
		}}>
		<Text style={{color: 'white', fontSize: 50, fontWeight: '900'}}>
			{props.name}
		</Text>
	</View>
)

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
		<Drawer.Navigator drawerContent={(props) => (
			<CustomDrawer {...props}/>)
		}>
			<Drawer.Screen name="Home" component={HomeNavigator}/>
			{/* <Drawer.Screen name="Change Route" component={DestinationSearch}/>
			<Drawer.Screen name="Current Trip" component={SearchResults}/> */}

			<Drawer.Screen name="Previous Trips" >
				{() => <DummyScreen name={"Your Trips"}/>}
			</Drawer.Screen>

			<Drawer.Screen name="Find Friends" >
				{() => <DummyScreen name={"Find Friends"}/>}
			</Drawer.Screen>

			<Drawer.Screen name="Food Orders" >
				{() => <DummyScreen name={"Food Orders"}/>}
			</Drawer.Screen>

			<Drawer.Screen name="Help" >
				{() => <DummyScreen name={"Help"}/>}
			</Drawer.Screen>

			<Drawer.Screen name="Wallet" >
				{() => <DummyScreen name={"Wallet"}/>}
			</Drawer.Screen>

			<Drawer.Screen name="Settings" >
				{() => <DummyScreen name={"Settings"}/>}
			</Drawer.Screen>

		</Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
