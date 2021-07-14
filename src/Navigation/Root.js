import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeScreen/>
    </NavigationContainer>
  );
};

export default RootNavigator;
