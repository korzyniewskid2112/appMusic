import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export type TMyTheme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    button?: {
      primary: string;
    };
    icon?: {
      tabBar: string;
    };
  };
};

const myDefaultTheme: TMyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    icon: {
      tabBar: '#f82b47',
    },
  },
};

const myDarkTheme: TMyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export {myDarkTheme, myDefaultTheme};
