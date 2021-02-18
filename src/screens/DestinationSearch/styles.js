import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
		backgroundColor: '#07070A',
		zIndex: 0,
		borderTopRightRadius: 27,
		borderTopLeftRadius: 27,
		borderRadius: 27,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 124,
	},
	inputOne:{
		position: "absolute",
		top: 10,
		width: "100%",
		alignSelf: 'center',
		zIndex: 9,
	},
	inputTwo:{
		position: "absolute",
		top: 65,
		width: "100%",
		alignSelf: 'center',
		zIndex: 8,
	},
    textInput: {
		// width: "90%",
		fontSize: 15,
		color: "#fff",
        backgroundColor: '#F1A300',
		padding: 10,
		paddingLeft: 70,
        marginVertical: 5,
        borderRadius: 27,
		zIndex: 9,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 3.49,

		elevation: 1,
    },
	listView: {
		borderRadius: 27,
		backgroundColor: "transparent",
	},
	row: {
		backgroundColor: "#F1A300",
		color: "#fff",
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
		backgroundColor: "#F1A300",
		borderTopWidth: 1,
  		borderTopColor: 'black',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.27,
		shadowRadius: 7.49,
		elevation: 124,
	}

});

export default styles;