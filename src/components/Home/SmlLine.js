import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const SmlLine = () => {
  return <View style={styles.Divider} />;
};

export default SmlLine;

const styles = StyleSheet.create({
  Divider: {
    backgroundColor: theme.colors.grey,
    height: 6,
    width: 21,
  },
});
