import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function ListItem({ title, value, onPress }) {

            

    return (
        <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
            <View style={styles.mainContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <View style={{flex:1}}/>
                <Text style={styles.valueText}>{value}</Text>
            </View>
        </TouchableOpacity>

    );
}
