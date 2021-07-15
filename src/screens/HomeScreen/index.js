import React from "react"
import { View, Dimensions } from "react-native"
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';


const HomeScreen = (props) => {
    return (
		<View style={{
			backgroundColor: "red",
			borderTopRightRadius: 27,
			height: 400
		}}>
			<View style={{ height: Dimensions.get('window').height - 400, }}>
				<HomeMap/>
			</View>
			
            <CovidMessage/>
            <HomeSearch/>

            {/*Bottom Compo*/}
        </View>
    );
};

export default HomeScreen;