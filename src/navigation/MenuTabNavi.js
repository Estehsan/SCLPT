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
  Legal,
  About,
  MobilityWorkoutStart,
  MobilityRoutine,
  AllTracks,
  Conversation,
} from '../Screens/MoreScreen';
import {theme} from '../theme';
import Setting from '../Screens/MoreScreen/Setting';

const Stack = createNativeStackNavigator();

const MenuTabNavi = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerShown: true,

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
      <Stack.Screen name="Menu" component={MoreHome} />

      <Stack.Group>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Conversation" component={Conversation} />
      </Stack.Group>
      <Stack.Screen name="Map" component={Map} />

      <Stack.Group>
        <Stack.Screen name="Mobility" component={Mobility} />

        <Stack.Screen name="Routine" component={MobilityRoutine} />
      </Stack.Group>
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="Shopping" component={Shopping} />
      <Stack.Screen name="Sleep" component={Sleep} />
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Music"
          component={Music}
        />
        <Stack.Screen
          options={{
            presentation: 'modal',
          }}
          name="AllTracks"
          component={AllTracks}
        />
      </Stack.Group>
      <Stack.Screen name="StopWatch" component={StopWatch} />

      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default MenuTabNavi;

const styles = StyleSheet.create({});
