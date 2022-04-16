import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BlurBg, DarkBg, GlobalCSS, Heading} from '../../components/basic';

const Music = ({navigation}) => {
  useLayoutEffect(() => {
    return () => {
      navigation.setOptions({
        headerTitle: 'Music',
      });
    };
  }, [navigation]);
  return (
    <BlurBg
      imgLink={`https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`}>
      <View style={[GlobalCSS.justifyCenter, GlobalCSS.alignItemsCenter]}>
        <Heading>huaki</Heading>
      </View>
    </BlurBg>
  );
};

export default Music;

const styles = StyleSheet.create({});
