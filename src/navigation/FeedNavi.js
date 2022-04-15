import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {theme} from '../theme';
import FeedHome from '../Screens/FeedScreen/FeedHome';
import {AddPost} from '../Screens/FeedScreen';

const Stack = createNativeStackNavigator();

const FeedNavi = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Stack.Navigator
      initialRouteName="Feed"
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
      <Stack.Screen
        name="FeedHome"
        options={{
          headerTitle: 'Feed',
        }}
        component={FeedHome}
      />
      <Stack.Screen
        name="AddPost"
        options={{
          headerTitle: 'ADd new post',
        }}
        component={AddPost}
      />
    </Stack.Navigator>
  );
};

export default FeedNavi;

const styles = StyleSheet.create({});
