import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import TabsNavigation from './TabsNavigation';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      <Stack.Screen name="MusicPlayer" component={View} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
