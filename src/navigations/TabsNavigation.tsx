/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScrollView, Text, View} from 'react-native';
import CustomTabs from '../components/organisms/CustomTabs';

const Test = () => (
  <ScrollView>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
    <Text>dwdw</Text>
  </ScrollView>
);

const TabsNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Listen"
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabs {...props} />}>
      <Tab.Screen name="Listen" component={Test} />
      <Tab.Screen name="Explore" component={View} />
      <Tab.Screen name="Radio" component={View} />
      <Tab.Screen name="Library" component={View} />
      <Tab.Screen name="Search" component={View} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
