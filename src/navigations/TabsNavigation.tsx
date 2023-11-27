/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import NativeScrollView from 'molecules/NativeScrollView';
import CustomTabs from 'organisms/CustomTabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Test = () => (
  <NativeScrollView>
    <Text>xd</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>
    <Text style={{backgroundColor: 'green'}}>dwe</Text>

    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
    <Text>dwe</Text>
  </NativeScrollView>
);

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
            return (
              <IconAntDesign name={'appstore1'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Radio"
        component={View}
        options={{
          title: 'Radio',
          tabBarIcon: ({color, size}) => {
            return <IconIonicons name={'radio'} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Library"
        component={View}
        options={{
          title: 'Library',
          tabBarIcon: ({color, size}) => {
            return (
              <IconMaterialIcons
                name={'library-music'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={View}
        options={{
          title: 'Search',
          tabBarIcon: ({color, size}) => {
            return <IconIonicons name={'search'} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
