import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const P = ({children, navigation, colorScheme, Align}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
        textAlign: Align ? Align : 'left',
        color: colorScheme
          ? colorScheme
          : isDarkMode
          ? theme.colors.white
          : theme.colors.black,
      }}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({});
