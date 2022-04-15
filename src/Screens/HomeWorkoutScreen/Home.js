import {StyleSheet, Text, View, FlatList, useColorScheme} from 'react-native';
import React from 'react';
import {ListOfOnboarding} from '../../components/Auth';
import {BlurBg, GlobalCSS, HL} from '../../components/basic';
import {Headline} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useLayoutEffect} from 'react/cjs/react.development';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';
import {ProgramsTab, GoalsTab, ProgressTab} from './HomeTopNav';

const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
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
        </View>
      ),
    });
  }, [navigation]);

  return (
    // <BlurBg>
    //   <View
    //     style={[
    //       GlobalCSS.flex,
    //       GlobalCSS.padding.xmd,
    //       GlobalCSS.alignItemsCenter,
    //       GlobalCSS.justifyCenter,
    //     ]}>
    //     <Headline style={{color: 'white'}}>Home Screen IS LOADING....</Headline>
    //   </View>
    // </BlurBg>
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
      <Tab.Screen name="Programs" component={ProgramsTab} />
      <Tab.Screen name="Progress" component={ProgressTab} />
      <Tab.Screen name="Goals" component={GoalsTab} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 20,
  },
});
