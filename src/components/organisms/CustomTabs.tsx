import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import MiniPlayerCover from 'molecules/FullPlayerCover';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';

const PlatformView = Platform.OS === 'android' ? View : BlurView;

const CustomTabs = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <PlatformView
        blurType={theme.dark ? 'dark' : 'light'}
        blurAmount={3}
        reducedTransparencyFallbackColor={theme.dark ? 'black' : 'white'}
        style={styles.blurContainer}
      />
      <View>
        <MiniPlayerCover />
        <LinearGradient
          locations={[0, 0.1, 0.1]}
          colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.8)']}
          style={[{paddingBottom: bottom}, styles.tabContainer]}>
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
              icon = tabBarIcon({
                focused: isFocused,
                color: isFocused ? '#f82b47' : '#7d818d',
                size: 22,
              });
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
                key={title}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={tabBarAccessibilityLabel}
                testID={tabBarTestID}
                onPress={onPress}
                style={styles.tabButton}>
                <View style={styles.tabIcon}>{icon}</View>
                <Text style={{color: isFocused ? '#f82b47' : '#7d818d'}}>
                  {title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  blurContainer: {
    position: 'absolute',
    paddingTop: 4,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    marginBottom: 5,
  },
});

export default CustomTabs;
