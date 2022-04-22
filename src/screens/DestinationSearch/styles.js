import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
		backgroundColor: '#000',
		zIndex: 0,
		// borderTopRightRadius: 27,
		// borderTopLeftRadius: 27,
		borderRadius: 27,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 6,
		// },
		// shadowOpacity: 0.37,
		// shadowRadius: 7.49,
		// elevation: 124,
	},
	inputOne:{
		position: "absolute",
		top: 10,
		width: "90%",
		right: 15,
		alignSelf: 'center',
		zIndex: 9,
	},
	inputTwo:{
		position: "absolute",
		top: 55,
		width: "90%",
		right:15,
		alignSelf: 'center',
		zIndex: 8,
	},
    textInput: {
		height: 40,
		fontSize: 15,
		color: "#fff",
        backgroundColor: '#323232',
		padding: 10,
		paddingLeft: 20,
        marginVertical: 5,
        borderRadius: 10,
		zIndex: 9,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 6,
		// },
		// shadowOpacity: 0.37,
		// shadowRadius: 3.49,

		// elevation: 1,
    },
	listView: {
		borderRadius: 10,
		backgroundColor: "transparent",
	},
	row: {
		backgroundColor: "#323232",
		color: "#000",
	},
	description: {
		color: "#fff",
		shadowColor: "#000",
	},
	separator: {
		backgroundColor: "#000",
	},
	poweredContainer: {
		borderBottomRightRadius: 27,
		borderBottomLeftRadius: 27,
		backgroundColor: "#323232",
		borderTopWidth: 1,
  		borderTopColor: '#000',
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 6,
		// },
		// shadowOpacity: 0.27,
		// shadowRadius: 7.49,
		// elevation: 124,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#323232',
		padding: 10,
	},
	iconContainer: {
		backgroundColor: 'orange',
		padding: 4,
		borderRadius: 50,
		marginRight: 10,
		// marginLeft: 5,
		
	}, 
	locationText:{
		color: '#fff'
	},
	circle: {
		top: 32,
		left: 20,
		position: 'absolute',
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: 'orange',
		zIndex:2,
	},
	line: {
		width: 1,
		height: 40,
		borderRadius: 50,
		backgroundColor: '#fff',
		position: 'absolute',
		top:40,
		left: 24,
		zIndex:1,
	},
	square: {
		width: 10,
		height: 10,
		backgroundColor: '#53C351',
		position: 'absolute',
		top:75,
		left: 20,
		zIndex:2,
	},

});

export default styles;