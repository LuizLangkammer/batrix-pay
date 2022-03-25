import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import GlobalStyles from '../../variables/styles'
import MonthDetail from '../../components/MonthDetail';
import AsyncStorageService from '../../services/storage'
import Input from '../../components/Input';

export default function MainPage({navigation}) {

    const [monthDetail, setMonthDetail] = useState(null);
    const [name, setName] = useState(null);
    const [nameError, setNameError] = useState("Campo Obrigatório")

    useEffect(async ()=>{
      const monthDetail = await AsyncStorageService.getMonthDetail();
      setMonthDetail(monthDetail);
    },[])     
    

    return (
            <View style={styles.mainContainer}>
              <View style={GlobalStyles.headerContainer}>
                <Text style={styles.headerText}>R$ {monthDetail?.earnings}</Text>
              </View>
              <Input
                title="Title"
                placeholder="placeholder"
                value={name}
                setValue={setName}
                error = {nameError}
                required = {true}
              ></Input>
              <View style={styles.monthDetailContainer}>
                {monthDetail ? <MonthDetail data={monthDetail} updateData={setMonthDetail} navigation={navigation}/> : <View/>}
              </View>
            </View>
    );
}
