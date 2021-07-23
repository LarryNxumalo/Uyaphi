import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAC501',
        padding: 15,
        paddingTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
		textAlign: 'center'
    },
    text: {
        color: '#000',
        fontSize: 14,
        marginBottom: 10,
		fontWeight: "500",
		textAlign: 'center'
    },
    learnMore: {
        color: '#000',
        fontSize: 15,
        fontWeight: '300',
		textAlign: 'center'
    }
});


export default styles;

