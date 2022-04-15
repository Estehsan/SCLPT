import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import {theme} from '../../theme';
import {PlusGreenBtn, WhiteRoundBtn} from '../../components/Common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MobilityRoutine = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <DarkBg>
      <View
        style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd, GlobalCSS.flex]}>
        <Heading>Fitness Streching</Heading>
        <View
          style={[
            GlobalCSS.flex,
            GlobalCSS.justifyCenter,
            GlobalCSS.alignItemsCenter,
            GlobalCSS.alignContentCenter,
          ]}>
          <View
            style={{
              ...theme.customShadow,
            }}>
            <Image
              style={{
                width: 300,
                height: 300,
                borderRadius: 300,
              }}
              resizeMode="cover"
              source={{
                uri: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
              }}
            />
          </View>
          <Heading>Strech for 30s</Heading>
          <View
            style={[
              GlobalCSS.row,
              GlobalCSS.alignItemsCenter,
              GlobalCSS.justifyCenter,
              GlobalCSS.fullWidth,
            ]}>
            <WhiteRoundBtn size={50}>
              <AntDesign
                name="arrowleft"
                size={25}
                color={!isDarkMode ? theme.colors.header : theme.colors.accent}
              />
            </WhiteRoundBtn>
            <View style={[GlobalCSS.padding.xmd]}>
              <PlusGreenBtn size={85}>
                <Ionicons name="checkmark-outline" size={50} color="white" />
              </PlusGreenBtn>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingBottom: 100}} />
    </DarkBg>
  );
};

export default MobilityRoutine;

const styles = StyleSheet.create({});
