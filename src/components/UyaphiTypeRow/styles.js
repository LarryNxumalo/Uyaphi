import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
	container: {
		backgroundColor:"#fff",
		height: 70,
		width: "100%",
		// alignSelf: "center",
		borderRadius: 23,
		marginBottom: 18,
		// borderWidth: 1,
		// borderColor: "#ddd",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 12,

	},
	image: {
		width: 120,
		height: 110,
		resizeMode: "contain",
		position: "absolute",
		top: -38,
		left: 150,
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
		fontSize: 17,
		marginLeft: 5,
		fontWeight: "500"
	}
})

export default styles;