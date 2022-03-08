import { StyleSheet } from "react-native";
import Color from '../../variables/colors';

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 8,
        backgroundColor: Color.lightBackground,
        flex:1
    },
    circle: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 40,
        borderRadius: 50
    },
    rectangle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.blueBackground,
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 20
    },
    valueText:{
        fontSize: 24,
        fontWeight: "bold",
    },
    bkBlue:{
        backgroundColor: Color.blueBackground,
    },
    bkRed: {
        backgroundColor: Color.redBackground,
    },
    blue: {
        color: Color.blue
    },
    red: {
        color: Color.red
    }
});

export default styles;