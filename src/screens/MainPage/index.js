import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import GlobalStyles from '../../variables/styles'
import MonthDetail from '../../components/MonthDetail';
import AsyncStorageService from '../../services/storage'

export default function MainPage() {

    const [monthDetail, setMonthDetail] = useState(null);

    useEffect(async ()=>{
      const monthDetail = await AsyncStorageService.getMonthDetail();
      setMonthDetail(monthDetail);
    },[])     
    

    return (
            <View style={styles.mainContainer}>
              <View style={GlobalStyles.headerContainer}>
                <Text style={styles.headerText}>R$ {monthDetail?.earnings}</Text>
              </View>
              <View style={styles.monthDetailContainer}>
                {monthDetail ? <MonthDetail data={monthDetail} updateData={setMonthDetail}/> : <View/>}
              </View>
            </View>
    );
}
