/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import NativeScrollView from 'molecules/NativeScrollView';
import CustomTabs from 'organisms/CustomTabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Test = () => <NativeScrollView />;

//TODO i18next
const TabsNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Listen"
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabs {...props} />}>
      <Tab.Screen
        name="Listen"
        component={Test}
        options={{
          title: 'Listen',
          tabBarIcon: ({color, size}) => {
            return <IconAntDesign name={'play'} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={View}
        options={{
          title: 'Explore',
          tabBarIcon: ({color, size}) => {
            return <IconAntDesign name={'play'} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Radio" component={View} options={{title: 'Radio'}} />
      <Tab.Screen
        name="Library"
        component={View}
        options={{title: 'Library'}}
      />
      <Tab.Screen name="Search" component={View} options={{title: 'Search'}} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
