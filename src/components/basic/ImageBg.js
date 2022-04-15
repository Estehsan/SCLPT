import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {GlobalCSS} from '.';

const ImageBg = ({children, B}) => {
  return (
    <ImageBackground
      source={require('./../../assets/images/bg.png')}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={[GlobalCSS.flex]}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default ImageBg;

const styles = StyleSheet.create({});
