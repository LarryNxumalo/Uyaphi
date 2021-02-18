import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
	container: {
		backgroundColor:"#fff",
		height: 95,
		width: "100%",
		// alignSelf: "center",
		borderRadius: 27,
		marginBottom: 5,
		// borderWidth: 1,
		// borderColor: "#ddd",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
	},
	image: {
		width: 80,
		height: 70,
		resizeMode: "contain",
	},
	middleContainer: {
		flex: 1,
		flexDirection: "column",
		marginHorizontal: 10,
	},
	type: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 10,
		marginBottom: 5,
		fontWeight: "600",
		fontSize: 18,
		justifyContent: "space-between"
	},
	time: {
		color: "#5d5d5d",
	},
	rightContainer: {
		width: 100,
		flexDirection: "row",
		justifyContent: 'flex-end'
	},
	price:{
		fontSize: 18,
		marginLeft: 5,
		fontWeight: "500"
	}
})

export default styles;