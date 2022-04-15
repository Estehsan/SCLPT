import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Front,
  Login,
  OnBoardingOne,
  OnBoardingTwo,
  OnBoardingThree,
  SignUp,
  OnBoardingFour,
  OnBoardingFive,
} from '../Screens/Auth';
import {Title} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();

const HeaderStyling = ({navigation}) => ({
  headerTransparent: true,
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Entypo name="cross" size={30} color="grey" />
    </TouchableOpacity>
  ),
});

const AuthNavi = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={HeaderStyling}>
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerShown: false,
        }}
        name="Front"
        component={Front}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Title style={{color: 'white'}}>Login</Title>,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Title style={{color: 'white'}}>Sign Up</Title>,
        }}
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        options={{
          headerTitle: () => (
            <Title style={{color: 'white'}}>Setup Your Account</Title>
          ),
        }}
        name="OnBoardingOne"
        component={OnBoardingOne}
      />
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Title style={{color: 'white'}}>Setup Your Account</Title>
          ),
        }}
        name="OnBoardingTwo"
        component={OnBoardingTwo}
      />
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Title style={{color: 'white'}}>Setup Your Account</Title>
          ),
        }}
        name="OnBoardingThree"
        component={OnBoardingThree}
      />
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Title style={{color: 'white'}}>Setup Your Account</Title>
          ),
        }}
        name="OnBoardingFour"
        component={OnBoardingFour}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OnBoardingFive"
        component={OnBoardingFive}
      />
    </Stack.Navigator>
  );
};

export default AuthNavi;

const styles = StyleSheet.create({});
