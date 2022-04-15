import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import PlusGreenBtn from '../../components/Common/PlusGreenBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import FeedList from '../../components/Feed/FeedList';
import {theme} from '../../theme';

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

const FeedHome = ({navigation}) => {
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
          <Heading>Latest</Heading>
          <Entypo
            name="chevron-down"
            size={30}
            color={theme.colors.lightgrey}
          />
        </View>

        <PlusGreenBtn onPress={() => navigation.navigate('AddPost')}>
          <Entypo name="plus" size={28} color="white" />
        </PlusGreenBtn>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <FeedList item={item} navigation={navigation} />
        )}
      />
      <View style={{paddingBottom: 100}} />
    </DarkBg>
  );
};

export default FeedHome;

const styles = StyleSheet.create({});
