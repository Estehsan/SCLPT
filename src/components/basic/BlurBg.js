import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import GlobalCSS from './GlobalCSS';

const BlurBg = ({children, imgLink}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      source={
        imgLink ? {uri: imgLink} : require('./../../assets/images/bg.png')
      }
      resizeMode="cover"
      style={[GlobalCSS.flex]}>
      <BlurView
        style={[GlobalCSS.flex]}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="black">
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: isDarkMode
              ? 'rgba(0,0,0,0.5)'
              : 'rgba(255,255,255,0.5)',
          }}>
          {children}
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default BlurBg;

const styles = StyleSheet.create({});
