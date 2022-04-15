import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../theme';
import {H1} from '../basic';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Switch} from 'react-native-paper';

const SettingList = ({item}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.main}>
      <View style={styles.Left}>
        <View style={styles.icon}>
          <View style={styles.circle}>
            <Ionicons
              name="settings-sharp"
              size={20}
              color={theme.colors.primary}
            />
          </View>
        </View>
        <View style={styles.Details}>
          <H1>{item.title}</H1>
          <Text
            style={{
              color: theme.colors.grey,
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: '700',
              lineHeight: 24,
              letterSpacing: 1,
              fontSize: 10,
            }}>
            {item.status}
          </Text>
        </View>
      </View>
      <View style={styles.Right}>
        {/* <Entypo
          name="dots-three-vertical"
          size={20}
          color={isDarkMode ? theme.colors.bg : theme.colors.accent}
        /> */}
        <Switch
          color={theme.colors.primary}
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
      </View>
    </View>
  );
};

export default SettingList;

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
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#00FF4132',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
