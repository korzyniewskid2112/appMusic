import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
