import { StyleSheet } from "react-native";
import Color from '../../variables/colors';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.whileModalBackground,
        flex: 1,
    },
    headerText:{
        color: Color.green,
        textAlign: "right",
        fontSize: 22,
        fontWeight: 'bold'
    },
    monthDetailContainer: {
        flex: 0.9,
        width: '80%',
        alignSelf: 'center',
        marginTop: 10
    }
});

export default styles;