import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Color from '../../variables/colors';
import { Entypo } from '@expo/vector-icons'; 
import GlobalStyles from '../../variables/styles';
import styles from './style';
import ListItem from '../ListItem'
import AsyncStorageService from '../../services/storage'


export default function MonthDetail({data, updateData}) {
            

    async function addEarning(){
        const result = await AsyncStorageService.addEarning(100);
        if(!result){
            //error management
            return
        }
        updateData({...result});
    }

    async function addSpent(){
        const spent = {
            name: "Moto",
            details: {
                value: 10.88,
                name: "Abastecimento",
                data: new Date (),
                description: "No description"
            }
        }
        const result = await AsyncStorageService.addSpent(spent);
        if(!result){
            //error management
            return
        }
        data = result;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={[GlobalStyles.modalHeaderContainer,{height: '18%'}]}>
                <TouchableOpacity style={[styles.circle, styles.bkBlue]} onPress={()=>{addEarning()}}>
                    <Entypo name={'plus'} color={Color.blue} size={30} />
                </TouchableOpacity>
                <View style={{flex:1}}/>
                <View style={[styles.rectangle, styles.bkBlue]}>
                    <Text style={[styles.valueText,styles.blue]}>R$ {data.earnings}</Text>
                </View>
            </View>
            <View style={{flex:10}}>
                <FlatList 
                    data={data.spentTypes} 
                    renderItem={({ item }) => {
                        return (
                            <ListItem title={item.name} value={item.totalValue} />
                        )
                    }}
                    keyExtractor={(item,index) => index} />
            </View>
            <View style={GlobalStyles.modalHeaderContainer}>
            <View style={[styles.circle,styles.bkRed]}>
                    <Entypo name={'minus'} color={Color.red} size={30} />
                </View>
                <View style={{flex:1}}/>
                <TouchableOpacity style={[styles.rectangle, styles.bkRed]} onPress={()=>{addSpent()}}>
                    <Text style={[styles.valueText,styles.red]}>R$ {data.earnings}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
