import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Title} from 'react-native-paper';

const Header = ({title}) => {
  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Entypo name="cross" size={30} color="grey" />
      </View>
      <View style={styles.center}>
        <Title style={{color: 'white'}}>{title}</Title>
      </View>

      <View style={styles.right}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    alignItems: 'center',
    flex: 1,
  },
  right: {
    alignItems: 'center',

    flex: 1,
  },
  center: {
    alignItems: 'center',

    flex: 6,
  },
});
