import { StyleSheet } from "react-native";
import Color from '../../variables/colors';

const styles = StyleSheet.create({
    touchableContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    mainContainer: {
        borderRadius: 5,
        backgroundColor: Color.greenGradient,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    valueText: {
        textAlign: 'right'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;