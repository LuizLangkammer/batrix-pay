import AsyncStorage from '@react-native-async-storage/async-storage';

let monthDetail = null;

class AssyncStoarageService {

    

    async addSpent(spent){
        if(!monthDetail) return {};
        const typeIndex = monthDetail.spentTypes.findIndex((element)=>{
            return element.name === spent.name;
        });

        if(typeIndex === -1){
            monthDetail.spentTypes.push({
                name: spent.name,
                totalValue: 0,
                spents: []
            });
            typeIndex = monthDetail.spentTypes.length - 1;
        }

        const spents = monthDetail.spentTypes[typeIndex].spents;
        spents.push(spent.details);
        monthDetail.spentTypes[typeIndex].totalValue += spent.details.value;
        try {
            await AsyncStorage.setItem('monthDetail', JSON.stringify(monthDetail));
          } catch(e) {
            return {};
          }
        return monthDetail;
    }

    async addEarning(earning){
        if(!monthDetail) return {};
        monthDetail.earnings += earning;
        try {
            await AsyncStorage.setItem('monthDetail', JSON.stringify(monthDetail));
          } catch(e) {
            return {};
          }
        return monthDetail;
    }

    
    async getMonthDetail(){
        if(monthDetail) return monthDetail;
        try {
            const jsonValue = await AsyncStorage.getItem('monthDetail')
            monthDetail = jsonValue ? JSON.parse(jsonValue) : null;
            if(!monthDetail) monthDetail = {
                earnings: 0,
                senptTypes: []
            }
            return monthDetail;
          } catch(e) {
            return null;
          }
    }

}
const service = new AssyncStoarageService();

export default service;