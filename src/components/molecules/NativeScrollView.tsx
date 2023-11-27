import {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type TNativeScrollView = {
  showVerticalIndicator?: boolean;
  showHorizontalIndicator?: boolean;
};

const NativeScrollView = ({
  children,
  showVerticalIndicator = false,
  showHorizontalIndicator = false,
}: PropsWithChildren<TNativeScrollView>) => {
  const {bottom, top} = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={showVerticalIndicator}
      showsHorizontalScrollIndicator={showHorizontalIndicator}>
      <View
        style={[
          {paddingBottom: bottom + 40, paddingTop: top + 25},
          styles.container,
        ]}>
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default NativeScrollView;
