import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Chat,
  Mobility,
  MoreHome,
  Map,
  Recipes,
  Shopping,
  Sleep,
  Music,
  StopWatch,
} from '../Screens/MoreScreen';
import {theme} from '../theme';
import {
  Home,
  ProgramScreen,
  SpecificWorkoutStart,
} from '../Screens/HomeWorkoutScreen';

const Stack = createNativeStackNavigator();

const HomeTabNavi = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Stack.Navigator
      initialRouteName="Workout"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,

        headerStyle: {
          backgroundColor: isDarkMode
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
        headerTitleStyle: {
          fontFamily: 'BebasNeue-Regular',
          fontSize: 20,
          letterSpacing: 2,
        },
        headerTintColor: isDarkMode ? theme.colors.bg : theme.colors.accent,
      }}>
      <Stack.Screen name="Workout" component={Home} />

      <Stack.Screen name="ProgramScreen" component={ProgramScreen} />
      <Stack.Screen
        name="SpecificWorkoutStart"
        component={SpecificWorkoutStart}
      />

      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default HomeTabNavi;

const styles = StyleSheet.create({});
