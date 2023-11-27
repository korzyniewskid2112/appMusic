import {BlurView} from '@react-native-community/blur';
import {useTheme} from '@react-navigation/native';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PlatformView = Platform.OS === 'android' ? View : BlurView;

const MiniPlayerCover = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer}>
        <PlatformView
          blurType={theme.dark ? 'dark' : 'light'}
          blurAmount={4}
          reducedTransparencyFallbackColor={theme.dark ? 'black' : 'white'}
          style={styles.platformView}>
          <View style={{borderRadius: 5, overflow: 'hidden', marginRight: 10}}>
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ec8be21d32e663885fbb244e',
              }}
              resizeMethod="auto"
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
          </View>
          <Text
            style={{color: 'white', flex: 3, fontWeight: '600', fontSize: 16}}>
            Brazil
          </Text>
          <IconFontAwesome5 name="forward" />
          <Text>dwdw</Text>
        </PlatformView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 2,
  },
  touchableContainer: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  platformView: {
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MiniPlayerCover;
