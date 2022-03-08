import { StyleSheet } from "react-native";
import Color from './colors';

const GlobalStyles = StyleSheet.create({
    headerContainer:{
        height: '15%',
        backgroundColor: Color.darkBackground,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        justifyContent: "flex-end",
        padding: 25
    },
    modalHeaderContainer:{
        height: '15%',
        backgroundColor: Color.darkBackground,
        borderRadius: 8,
        alignItems: "center",
        padding: 25,
        flexDirection: 'row'
    },
});

export default GlobalStyles;