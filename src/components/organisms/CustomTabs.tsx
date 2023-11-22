import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
// import MiniPlayerCover from 'molecules/FullPlayerCover';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PlatformView = Platform.OS === 'android' ? View : BlurView;

const CustomTabs = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <PlatformView
      style={[{paddingBottom: bottom}, styles.container]}
      blurType="dark"
      blurRadius={25}
      blurAmount={10}
      overlayColor="transparent">
      {/* <MiniPlayerCover /> */}
      <View style={styles.tabsContainer}>
        {state.routes.map((route, index) => {
          const {
            options: {
              tabBarTestID,
              tabBarAccessibilityLabel,
              title,
              tabBarIcon,
            },
          } = descriptors[route.key];

          const isFocused = state.index === index;

          let icon = null;
          if (tabBarIcon) {
            icon = tabBarIcon({focused: isFocused, color: 'black', size: 22});
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          if (!title || !icon) {
            return null;
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={tabBarAccessibilityLabel}
              testID={tabBarTestID}
              onPress={onPress}
              style={{flex: 1}}>
              {icon}
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </PlatformView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
});

export default CustomTabs;
