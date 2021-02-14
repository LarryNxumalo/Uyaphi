import React from "react"
import { View, Text } from "react-native"
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';


const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap/>

            <CovidMessage/>

            {/*Bottom Compo*/}

        </View>
    );
};

export default HomeScreen;