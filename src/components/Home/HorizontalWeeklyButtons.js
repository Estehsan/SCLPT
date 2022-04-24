import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {H1} from '../basic';
import LinearGradient from 'react-native-linear-gradient';

const HorizontalWeeklyButtons = ({onPress, item, windex, index, ref}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {windex === index ? (
        <LinearGradient
          colors={['#20923E', '#29DB57', '#51FF76']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          useAngle={true}
          angle={0}
          style={[
            styles.main,
            {
              borderWidth: 0,
            },
          ]}>
          <H1 color={'white'}>{item.Day}</H1>
        </LinearGradient>
      ) : (
        <View style={styles.main}>
          <H1>{item.Day}</H1>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default HorizontalWeeklyButtons;

const styles = StyleSheet.create({
  main: {
    paddingVertical: 5,
    height: 50,
    marginRight: 10,
    width: 150,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 50,
  },
});
