import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainBox: {
		backgroundColor: '#07070A',
		color: '#fff'
	},
    inputBox: {
        backgroundColor: '#323232',
		color: '#fff',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
	text: {
		color: '#ffffff'
	},
    inputText: {
		marginLeft: 15,
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#07070A',
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#323232',

		// backgroundColor: '#323232',
    },
    iconContainer: {
        backgroundColor: '#323232',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
		color: '#fff',
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 15,
    }
})

export default styles;