import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const myDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const myDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export {myDarkTheme, myDefaultTheme};
