import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, H2} from '../basic';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';

const HeaderRightBtn = () => {
  return (
    <View style={styles.notification}>
      <Fontisto name="bell" color="grey" size={22} />
      <View
        style={{
          marginTop: 7,
          height: 10,
          width: 10,
          borderRadius: 10,
          backgroundColor: theme.colors.primary,
        }}
      />
    </View>
  );
};

export default HeaderRightBtn;

const styles = StyleSheet.create({
  notification: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
