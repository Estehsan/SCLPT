import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../theme';
import {P} from '../basic';
import LinearGradient from 'react-native-linear-gradient';

const ListOfOnboarding = ({Title, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OnBoardingThree')}
      style={styles.row}>
      <LinearGradient
        colors={['black', 'transparent']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        useAngle={true}
        angle={0}
        style={styles.Main}>
        <P colorScheme={'white'}>{Title}</P>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ListOfOnboarding;

const styles = StyleSheet.create({
  Main: {
    width: '90%',
    marginHorizontal: '5%',
    height: 140,
    backgroundColor: theme.colors.grey,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 15,
  },
  row: {
    flex: 1,
  },
});
