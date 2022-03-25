import { StyleSheet } from "react-native";
import Color from '../../variables/colors';

const styles = StyleSheet.create({
    inputContainer:{
        margin: 3
    },
    input: {
        backgroundColor: Color.green,
        borderRadius: 8,
        height: 40,
        padding: 10,
        color: Color.lightBlue,
        fontSize: 18,
        fontWeight: "bold"
    },
    label:{
        fontSize: 20,
        fontWeight: "bold",
        color: Color.blueBackground,
        marginLeft: 5,
        marginVertical: 5
    },
    errorMessage: {
        fontSize: 12,
        color: Color.redBackground
    },
    required: {
        fontSize: 16,
        color: Color.redBackground,
    }
});

export default styles;