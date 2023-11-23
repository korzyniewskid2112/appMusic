import {BlurView} from '@react-native-community/blur';
import {Platform, StyleSheet, Text, View} from 'react-native';

const PlatformView = Platform.OS === 'android' ? View : BlurView;

const MiniPlayerCover = () => {
  return (
    <View style={styles.container}>
      <PlatformView
        blurType="dark"
        blurRadius={25}
        blurAmount={10}
        overlayColor="transparent"
        style={styles.platformView}>
        <Text>dwdw</Text>
      </PlatformView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  platformView: {
    borderRadius: 10,
  },
});

export default MiniPlayerCover;
