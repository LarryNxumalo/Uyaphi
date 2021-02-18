import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#eee',
        margin: 10,
        borderRadius: 27,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 15,
    }
})

export default styles;