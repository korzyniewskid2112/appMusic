import {myDarkTheme, myDefaultTheme} from '../const/systemColors';
import {useColorScheme} from 'react-native';

const useSystemColors = () => {
  const scheme = useColorScheme();
  const getCurrentColors = () =>
    scheme === 'dark' ? myDarkTheme : myDefaultTheme;

  return {getCurrentColors};
};

export default useSystemColors;
