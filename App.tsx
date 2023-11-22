import MainNavigation from './src/navigations/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import useSystemColors from 'hooks/useSystemColors';

const App = () => {
  const {getCurrentColors} = useSystemColors();

  return (
    <NavigationContainer theme={getCurrentColors()}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
