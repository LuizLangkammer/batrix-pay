import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import GlobalStyles from '../../variables/styles'
import MonthDetail from '../../components/MonthDetail';
import AsyncStorageService from '../../services/storage'
import Input from '../../components/Input';

export default function SpentForm() {

    const [title, setTitle] = useState(null);
    const [titleError, setTitleError] = useState("Campo Obrigatório")

    

    return (
            <View style={styles.mainContainer}>
              
              <Input
                title="Título"
                placeholder=""
                value={title}
                setValue={setTitle}
                error = {titleError}
                required = {true}
              ></Input>
              
            </View>
    );
}
