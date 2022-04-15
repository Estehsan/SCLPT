import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Paragraph} from 'react-native-paper';
import {theme} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

const Divider = ({...props}) => {
  return (
    <View style={styles.Main} props>
      <LinearGradient
        colors={['transparent', 'white']}
        start={{x: 0.1, y: 0}}
        end={{x: 1, y: 0}}
        angle={0}
        style={styles.linearGradient}
      />
      <Paragraph style={{color: theme.colors.white}}>OR</Paragraph>
      <LinearGradient
        colors={['white', 'transparent']}
        start={{x: 0.1, y: 0}}
        end={{x: 1, y: 0}}
        angle={180}
        style={styles.linearGradient}
      />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  Main: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  linearGradient: {
    height: 2,
    width: '40%',
    opacity: 0.5,
  },
  Divider: {
    height: 2,
    width: '40%',
    backgroundColor: theme.colors.white,
    opacity: 0.5,
  },
});
