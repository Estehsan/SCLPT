import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screens/HomeWorkoutScreen';
import {Nutrition} from '../Screens/NutritionScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {OnBoardingFour, OnBoardingOne, OnBoardingThree} from '../Screens/Auth';
import {theme} from '../theme';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {HL} from '../components/basic';
import FeedHome from '../Screens/FeedScreen/FeedHome';
import {MoreHome} from '../Screens/MoreScreen';
import {AccountHome} from '../Screens/AccountScreen';
import MenuTabNavi from './MenuTabNavi';
import HomeTabNavi from './HomeTabNavi';
import NutritionNavi from './NutritionNavi';
import FeedNavi from './FeedNavi';

const Tab = createBottomTabNavigator();

const labetStyle = {
  fontSize: 15,
  fontFamily: 'BebasNeue-Regular',
  letterSpacing: 1,
};

const BottomTabNavi = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: labetStyle,

        tabBarActiveTintColor: theme.colors.white,

        tabBarButton: CustomTabButton,
        tabBarItemStyle: {
          borderTopWidth: 2,
          borderTopColor: '#aaaa',
          borderRadius: 1,
        },

        tabBarStyle: {
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: theme.colors.tabColor,
          position: 'absolute',
          borderTopColor: 'grey',

          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingTop: 5,
          height: 90,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Workouts"
        component={HomeTabNavi}
        options={{
          headerShown: false,
          headerShadowVisible: false,

          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('.././assets/images/workout-white.png')
                  : require('.././assets/images/workout.png')
              }
              height="30"
              width="30"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={NutritionNavi}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="database" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedNavi}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="lightbulb-on"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={30} />
          ),
        }}
        component={AccountHome}
      />
      <Tab.Screen
        name="MenuTabNavi"
        options={{
          title: 'Menu',
          headerShown: false,

          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('.././assets/images/more-white.png')
                  : require('.././assets/images/more.png')
              }
              height="30"
              width="30"
            />
          ),
        }}
        component={MenuTabNavi}
      />
    </Tab.Navigator>
  );
};

const CustomTabButton = props => (
  <Pressable
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, styles.activeTab]
        : props.style
    }
  />
);
export default BottomTabNavi;

const styles = StyleSheet.create({
  activeTab: {
    borderTopWidth: 2.5,
    borderRadius: 2.5,
    borderTopColor: theme.colors.primary,
  },
});
