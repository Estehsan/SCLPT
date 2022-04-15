import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import PlusGreenBtn from '../Common/PlusGreenBtn';
import {theme} from '../../theme';
import {H1} from '../basic';
import {Avatar} from 'react-native-paper';

const WeeklyProgramDayExercise = ({item, navigation}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() =>
        navigation.navigate('SpecificWorkoutStart', {
          title: item.title,
          description: item.description,
        })
      }>
      <View style={styles.Left}>
        <View style={styles.icon}>
          <Avatar.Icon
            size={40}
            icon="weight"
            style={{backgroundColor: theme.colors.grey}}
          />
        </View>
        <View style={styles.Details}>
          <H1>{item.title}</H1>
          <Text
            style={{
              color: theme.colors.grey,
              fontFamily: 'BebasNeue-Regular',
              fontWeight: '700',
              lineHeight: 24,
              letterSpacing: 1,
              fontSize: 10,
            }}>
            {item.description}
          </Text>
        </View>
      </View>
      <View style={styles.Right}>
        <Entypo
          name="chevron-right"
          size={20}
          color={isDarkMode ? theme.colors.bg : theme.colors.accent}
        />
      </View>
    </TouchableOpacity>
  );
};

export default WeeklyProgramDayExercise;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
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
