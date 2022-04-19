import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {H3, P} from '../../basic';

const MessageBubble = ({item}) => {
  const mine = item.user.id === 'u1';
  return (
    <>
      {mine ? (
        <View
          style={[
            styles.Container,
            styles.rMessage,
            {
              borderTopEndRadius: 0,
            },
          ]}>
          <Text style={styles.RText}>{item.content}</Text>
          <H3 font={'BebasNeue-Regular'} size={12}>
            {item.ago}
          </H3>
        </View>
      ) : (
        <LinearGradient
          colors={['#20923E', '#29DB57', '#51FF76']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          useAngle={true}
          angle={180}
          style={styles.linear}>
          <Text
            style={[
              styles.RText,
              {
                borderTopStartRadius: 0,
              },
            ]}>
            {item.content}
          </Text>
          <H3 font={'BebasNeue-Regular'} size={12}>
            {item.ago}
          </H3>
        </LinearGradient>
      )}
    </>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    maxWidth: '70%',
    borderRadius: 18,

    margin: 10,
    // marginLeft: 'auto',
  },
  linear: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    maxWidth: '70%',
    borderRadius: 18,
    borderTopLeftRadius: 0,

    margin: 10,
  },

  RText: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  lMessage: {
    backgroundColor: theme.colors.primary,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rMessage: {
    backgroundColor: 'silver',
    marginLeft: 'auto',
    marginRight: 10,
  },
});
