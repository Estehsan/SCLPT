import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ClockSubSleep, RoutineSubSleep} from './SleepSubScreens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme';

const Tab = createMaterialTopTabNavigator();

const Sleep = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={{
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Fontisto name="bell" color="grey" size={22} />
          <View
            style={{
              marginTop: 7,
              height: 10,
              width: 10,
              borderRadius: 10,
              backgroundColor: theme.colors.primary,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 12,
          fontWeight: 'bold',

          letterSpacing: 1,

          color: isDarkMode ? theme.colors.white : theme.colors.black,
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 10,
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: !isDarkMode
            ? theme.colors.accent
            : theme.colors.header,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 14,
        },
        tabBarContentContainerStyle: {},
      }}>
      <Tab.Screen name="Routine" component={RoutineSubSleep} />

      <Tab.Screen name="Clock" component={ClockSubSleep} />
    </Tab.Navigator>
  );
};

export default Sleep;

const styles = StyleSheet.create({});
