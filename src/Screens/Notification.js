import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DarkBg, GlobalCSS, Heading} from '../components/basic';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {NotificationList, PlusGreenBtn} from '../components/Common';
import FeedList from '../components/Feed/FeedList';

const data = [
  {
    id: 1,
    title: 'Feed is a photo',
    time: '2H AGO',
    image:
      'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80',
    like: '3K',
    comment: '120',
    share: '173',
    profileImage: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Wow this Is Amazing',
    time: '3H AGO',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2934&q=80',
    like: '3K',
    comment: '120',
    share: '173',
    profileImage: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'Wow this Is Amazing',
    time: '3H AGO',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2934&q=80',
    like: '3K',
    comment: '120',
    share: '173',
    profileImage: 'https://picsum.photos/200/300',
  },
];

const Notification = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DarkBg>
      <View
        style={[
          GlobalCSS.padding.ylg,
          GlobalCSS.row,
          GlobalCSS.justifyBetween,
          GlobalCSS.padding.xmd,
        ]}>
        <View style={[GlobalCSS.row, GlobalCSS.alignItemsCenter]}>
          <Heading>NOTIFICATION</Heading>
        </View>

        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: isDarkMode
              ? theme.colors.accent
              : theme.colors.header,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 39,
          }}>
          <MaterialIcons
            name="clear-all"
            color={!isDarkMode ? theme.colors.white : theme.colors.black}
            size={22}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <NotificationList item={item} navigation={navigation} />
        )}
      />
    </DarkBg>
  );
};

export default Notification;

const styles = StyleSheet.create({});
