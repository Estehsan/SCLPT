import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import GlobalCSS from './GlobalCSS';

const BlurBg = ({children}) => {
  return (
    <ImageBackground
      source={require('./../../assets/images/bg.png')}
      resizeMode="cover"
      style={[GlobalCSS.flex]}>
      <BlurView
        style={[GlobalCSS.flex]}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="black">
        <SafeAreaView style={styles.Container}>{children}</SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default BlurBg;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    flex: 1,
  },
});
