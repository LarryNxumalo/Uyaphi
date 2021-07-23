// import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './Home';


const Drawer = createDrawerNavigator();
const DummyScreen = (props) => (
	<View style={{height: '100%',justifyContent: 'center', alignItems: 'center', backgroundColor:'#FAC501'}}>
		<Text style={{fontSize: 20}}>{props.name}</Text>
	</View>
)


const RootNavigator = (props) => {
  return (
    <NavigationContainer>
		<Drawer.Navigator>

			<Drawer.Screen name="Home" component={HomeNavigator}/>

			<Drawer.Screen name="Your Trips">
				{()=><DummyScreen name="Your Trips"/>}
			</Drawer.Screen>

			<Drawer.Screen name="Help">
				{()=><DummyScreen name="Help"/>}
			</Drawer.Screen>

			<Drawer.Screen name="Wallet">
				{()=><DummyScreen name="Wallet"/>}
			</Drawer.Screen>

			<Drawer.Screen name="Settings">
				{()=><DummyScreen name="Settings"/>}
			</Drawer.Screen>

		</Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
