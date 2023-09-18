import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242A32',
    },
    header: {
        padding: 30
    },
    headerText: {
        marginTop: 35,
        fontSize: 25,
        lineHeight: 45,
        color: '#fff',
    },
    containerInput: {
        backgroundColor: "#67686D",
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row'
    },
    Input: {
        color: '#FFF',
        width: '80%',
        paddingLeft: 10,
    },
    noResult: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    }
  });
  