import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from './src/screens/MainPage';
import SpentForm from './src/screens/SpentForm';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="MainPage" component={MainPage} />
        <Stack.Screen options={{ headerShown: false }} name="SpentForm" component={SpentForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


