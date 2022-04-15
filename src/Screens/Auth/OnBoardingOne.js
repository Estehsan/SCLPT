import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BlurBg, GlobalCSS} from './../../components/basic';
import {Header} from './../../components/Auth';
import {Headline} from 'react-native-paper';
import {SmlLine} from './../../components/Home';
import {theme} from './../../theme';

const OnBoardingOne = ({navigation}) => {
  return (
    <BlurBg>
      {/* Top START 👇👇 */}
      <View style={[GlobalCSS.flex]}>
        <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
          <View style={[GlobalCSS.padding.ysm]} />

          <Headline style={{color: 'white'}}>Do you play sports?</Headline>
          <View style={[GlobalCSS.padding.ysm]} />
          <SmlLine />
        </View>
        {/* Top END 👆👆 */}

        {/* Bottom START 👇👇 */}
        <View
          style={[
            GlobalCSS.flex,
            GlobalCSS.alignItemsCenter,
            GlobalCSS.alignContentCenter,
          ]}>
          <View style={[GlobalCSS.row]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OnBoardingTwo')}
              style={styles.CircleBlack}>
              <Headline>YES</Headline>
            </TouchableOpacity>
            <View style={[GlobalCSS.padding.xsm]} />

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.CircleWhite}>
              <Headline>NO</Headline>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Bottom END 👆👆 */}
    </BlurBg>
  );
};

export default OnBoardingOne;

const styles = StyleSheet.create({
  CircleBlack: {
    backgroundColor: theme.colors.twhite,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 120,
    ...theme.customShadow,
  },
  CircleWhite: {
    backgroundColor: theme.colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 120,
    ...theme.customShadow,
  },
});
