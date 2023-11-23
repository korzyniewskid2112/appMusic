import {PropsWithChildren} from 'react';
import {View} from 'react-native';

const ThemeSystemContext = ({children}: PropsWithChildren) => {
  return <View>{children}</View>;
};

export default ThemeSystemContext;
