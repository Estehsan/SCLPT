import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GlobalCSS, H2, H3, P, PGrey} from './../../../components/basic';
import {Avatar} from 'react-native-paper';
import {theme} from '../../../theme';

const ConversationList = ({item, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {name, message, time, avatarImage} = item;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Conversation', {
          name,
          message,
          time,
          avatarImage,
        });
      }}
      style={styles.Main}>
      <View style={[GlobalCSS.row]}>
        <Avatar.Image
          size={50}
          style={{backgroundColor: theme.colors.lightgrey}}
          source={{
            uri: avatarImage,
          }}
        />
        <View style={[GlobalCSS.padding.xsm]}>
          <H2>{name}</H2>
          <H3 color={theme.colors.grey}>{message}</H3>
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
          {time}
        </Text>
      </View>
    </TouchableOpacity>
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
