import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {theme} from '../../theme';
import {GlobalCSS, H1, H2, H3, P} from '../basic';
import LinearGradient from 'react-native-linear-gradient';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {FullDivider} from '../Home';

const HorizontalListOfMeals = ({item, onPress, navigation}) => {
  const {title, protein, carbs, fat, quantity, fill} = item;

  return (
    <>
      <LinearGradient
        colors={['#00000080', theme.colors.grey, 'transparent']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0.3}}
        useAngle={true}
        angle={0}
        style={styles.container}>
        <View
          style={[
            GlobalCSS.row,
            GlobalCSS.justifyBetween,
            GlobalCSS.padding.ysm,
          ]}>
          <View>
            <H1 color={'white'}>{title}</H1>
            <H2 font={'BebasNeue-Regular'} color={'white'}>
              {quantity}
            </H2>
          </View>
          {fill ? (
            <AnimatedCircularProgress
              size={50}
              width={4}
              fill={fill}
              tintColor={theme.colors.primary}
              backgroundColor="grey">
              {fill => <P>{fill}</P>}
            </AnimatedCircularProgress>
          ) : null}
        </View>
        {/* BOTTOM */}

        <FullDivider greybg style={([GlobalCSS.margin.ysm], {opacity: 0.7})} />
        <View style={[GlobalCSS.row, GlobalCSS.justifyEvenly]}>
          <View>
            <H2 font={'BebasNeue-Regular'} color={'white'}>
              {protein}
            </H2>

            <H2 font={'BebasNeue-Regular'} color={theme.colors.grey}>
              CAL
            </H2>
          </View>
          <FullDivider greybg vertical style={{opacity: 0.2}} />
          <View>
            <H2 font={'BebasNeue-Regular'} color={'white'}>
              {carbs}
            </H2>
            <H2 font={'BebasNeue-Regular'} color={theme.colors.grey}>
              CAL
            </H2>
          </View>
          <FullDivider greybg vertical style={{opacity: 0.2}} />

          <View>
            <H2 font={'BebasNeue-Regular'} color={'white'}>
              {fat}
            </H2>
            <H2 font={'BebasNeue-Regular'} color={theme.colors.grey}>
              CAL
            </H2>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default HorizontalListOfMeals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey,
    marginHorizontal: 5,
    width: Dimensions.get('window').width - 160,
    padding: 20,
    justifyContent: 'flex-end',
    borderRadius: 20,
    height: 250,
  },
});
