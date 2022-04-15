import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  Title,
} from 'react-native-paper';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'BebasNeue-Regular',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});