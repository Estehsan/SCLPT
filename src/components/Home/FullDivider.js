import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../theme';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

const FullDivider = ({style, greybg, vertical}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <LinearGradient
      colors={
        greybg
          ? ['#ffffff08', 'white', '#ffffff08']
          : isDarkMode
          ? ['transparent', 'black', 'transparent']
          : ['transparent', 'white', 'transparent']
      }
      start={{x: 0.01, y: 1}}
      end={{x: 1, y: 1}}
      style={[
        styles.linearGradient,
        {
          height: vertical ? '100%' : 2,
          width: vertical ? 2 : '100%',
        },
        style,
      ]}
    />
  );
};

export default FullDivider;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 2,
  },
});
