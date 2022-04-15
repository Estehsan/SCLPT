import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {theme} from '../theme';

import {
  MealWeekly,
  Nutrition,
  RecipeNutrition,
} from '../Screens/NutritionScreen';

const Stack = createNativeStackNavigator();

const NutritionNavi = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Stack.Navigator
      initialRouteName="Nutrition"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,

        headerStyle: {
          backgroundColor: isDarkMode
            ? theme.colors.accent
            : theme.colors.header,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          ...theme.customShadow2,
        },
        headerTitleStyle: {
          fontFamily: 'BebasNeue-Regular',
          fontSize: 20,
          letterSpacing: 2,
        },
        headerTintColor: isDarkMode ? theme.colors.bg : theme.colors.accent,
      }}>
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="MealWeekly" component={MealWeekly} />
      <Stack.Screen
        name="RecipeNutrition"
        options={{
          headerTitle: 'Recipe Nutrition',
        }}
        component={RecipeNutrition}
      />
    </Stack.Navigator>
  );
};

export default NutritionNavi;

const styles = StyleSheet.create({});
