import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../theme';
import {Title} from 'react-native-paper';
import {H2, H3, P} from '../basic';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const ListOfPrograms = ({navigation, item, onPress}) => {
  const {id, Duration, fill} = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <LinearGradient
        colors={['#000', theme.colors.grey, 'transparent']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0.3}}
        useAngle={true}
        angle={0}
        style={styles.Main}>
        <View style={styles.Container}>
          <View>
            <Title style={{color: 'white'}}>Program 0{id}</Title>
            <H3 font="Montserrat-SemiBold" color="#fff">
              {Duration} Weeks
            </H3>
          </View>
          <View>
            {fill ? (
              <AnimatedCircularProgress
                size={50}
                width={4}
                fill={fill}
                tintColor={theme.colors.primary}
                backgroundColor="grey">
                {fill => <P>{fill}%</P>}
              </AnimatedCircularProgress>
            ) : null}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ListOfPrograms;

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
  Main: {
    backgroundColor: theme.colors.grey,
    flex: 1,
    width: '100%',
    height: 200,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,

    justifyContent: 'flex-end',
  },
  Container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
