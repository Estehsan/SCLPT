import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {H1, P} from '../basic';
import {Divider} from 'react-native-paper';
import {theme} from '../../theme';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PlusGreenBtn from '../Common/PlusGreenBtn';

const ListofGoals = ({title, current, done}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <View style={styles.main}>
      <View style={styles.Left}>
        <View style={styles.icon}>
          {done ? (
            <PlusGreenBtn size={30}>
              <FontAwesome
                name="check"
                size={15}
                color={isDarkMode ? theme.colors.bg : theme.colors.accent}
              />
            </PlusGreenBtn>
          ) : (
            <Entypo
              name="circle"
              size={24}
              color={isDarkMode ? theme.colors.bg : theme.colors.accent}
            />
          )}
        </View>
        <View style={styles.Details}>
          <H1>{title}</H1>
          <Text
            style={{
              color: isDarkMode ? theme.colors.bg : theme.colors.accent,
              fontFamily: 'Montserrat-Regular',
              fontWeight: '700',
              lineHeight: 24,
              letterSpacing: 1,
              fontSize: 10,
            }}>
            {current}
          </Text>
        </View>
      </View>
      <View style={styles.Right}>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color={isDarkMode ? theme.colors.bg : theme.colors.accent}
        />
      </View>
    </View>
  );
};

export default ListofGoals;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: 20,
  },
  Details: {
    paddingLeft: 10,
  },
  Left: {
    flexDirection: 'row',
    display: 'flex',
  },
  Right: {
    alignItems: 'center',
  },
});
