import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DarkBg, GlobalCSS, H1, HL} from '../../components/basic';
import {PlusGreenBtn, WhiteRoundBtn} from '../../components/Common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../theme';

const SpecificWorkoutStart = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation]);
  const {title, description} = route.params;
  return (
    <DarkBg>
      <Image
        style={{
          flex: 1,
          height: '50%',
          width: '100%',
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        }}
      />
      <View
        style={[
          GlobalCSS.flex,
          GlobalCSS.justifyEvenly,
          GlobalCSS.alignItemsCenter,
        ]}>
        <View style={[GlobalCSS.alignItemsCenter]}>
          <HL>{title}</HL>
          <HL>X4 REPS</HL>
        </View>

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
              <Ionicons name="ios-play-outline" size={30} color="white" />
            </PlusGreenBtn>
          </View>

          <WhiteRoundBtn size={50}>
            <AntDesign
              name="arrowright"
              size={25}
              color={!isDarkMode ? theme.colors.header : theme.colors.accent}
            />
          </WhiteRoundBtn>
        </View>
        <WhiteRoundBtn size={50}>
          <MaterialCommunityIcons
            name="restart"
            size={25}
            color={!isDarkMode ? theme.colors.header : theme.colors.accent}
          />
        </WhiteRoundBtn>
      </View>
      <View style={{paddingBottom: 100}} />
    </DarkBg>
  );
};

export default SpecificWorkoutStart;

const styles = StyleSheet.create({});
