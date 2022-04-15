import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, H1} from '../basic';
import {theme} from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';

const AccountListOptions = ({title, icon, iconCategory, onPress}) => {
  return (
    <View
      style={[
        GlobalCSS.row,
        GlobalCSS.justifyBetween,
        GlobalCSS.padding.yxs,
        GlobalCSS.alignItemsCenter,
      ]}>
      <View style={[GlobalCSS.row]}>
        {iconCategory === 'Entypo' ? (
          <Entypo
            style={[GlobalCSS.padding.xsm]}
            name={icon}
            size={25}
            color={theme.colors.primary}
          />
        ) : iconCategory === 'Fontisto' ? (
          <Fontisto
            style={[GlobalCSS.padding.xsm]}
            name={icon}
            size={25}
            color={theme.colors.primary}
          />
        ) : iconCategory === 'Feather' ? (
          <Feather
            style={[GlobalCSS.padding.xsm]}
            name={icon}
            size={25}
            color={theme.colors.primary}
          />
        ) : iconCategory === 'Ionicons' ? (
          <Ionicons
            style={[GlobalCSS.padding.xsm]}
            name={icon}
            size={25}
            color={theme.colors.primary}
          />
        ) : iconCategory === 'Anticon' ? (
          <Anticon
            style={[GlobalCSS.padding.xsm]}
            name={icon}
            size={25}
            color={theme.colors.primary}
          />
        ) : iconCategory === 'MaterialCommunityIcons' ? (
          <MaterialCommunityIcons
            style={[GlobalCSS.padding.xsm]}
            name={icon}
            size={25}
            color={theme.colors.primary}
          />
        ) : null}

        <H1>{title}</H1>
      </View>
      <Entypo name="chevron-right" size={28} color={theme.colors.grey} />
    </View>
  );
};

export default AccountListOptions;

const styles = StyleSheet.create({});
