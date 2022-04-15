import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {GlobalCSS, H2, H3, P, PGrey} from '../basic';
import {Avatar} from 'react-native-paper';

import {theme} from '../../theme';

const ConversationList = ({item}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.Main}>
      <View style={[GlobalCSS.row]}>
        <Avatar.Image
          size={50}
          style={{backgroundColor: theme.colors.lightgrey}}
          source={{
            uri: item.avatarImage,
          }}
        />
        <View style={[GlobalCSS.padding.xsm]}>
          <H2>{item.name}</H2>
          <H3 color={theme.colors.grey}>{item.message}</H3>
        </View>
      </View>
      <View style={styles.right}>
        <Text
          style={{
            fontSize: 10,
            color: isDarkMode ? theme.colors.accent : theme.colors.bg,
            fontFamily: 'Montserrat-SemiBold',
            fontWeight: '700',
            letterSpacing: 1,
            lineHeight: 24,
          }}>
          {item.time}
        </Text>
      </View>
    </View>
  );
};

export default ConversationList;

const styles = StyleSheet.create({
  Main: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
