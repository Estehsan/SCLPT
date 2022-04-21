import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BlurBg, DarkBg, GlobalCSS, H1} from '../../components/basic';
import {HeaderTopBar} from '../../components/Common';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../theme';
import {FlatList} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    track: 'In da Club',
    artist: 'Drake',
    playing: false,
  },
  {
    id: 2,
    track: 'New Slaves',
    artist: 'Trst',
    playing: true,
  },
  {
    id: 3,
    track: 'In da Club',
    artist: 'Kanye West',
    playing: false,
  },
  {
    id: 4,
    track: 'In da Club',
    artist: 'Nashar',
    playing: false,
  },
  {
    id: 5,
    track: 'In da Club',
    artist: 'Balo',
    playing: false,
  },
];

const AllTracks = ({route, navigation}) => {
  const {bgImg} = route.params;
  return (
    <BlurBg imgLink={bgImg}>
      {/* <LiftOfTracks /> */}
      <FlatList
        data={data}
        renderItem={({item}) => <LiftOfTracks item={item} />}
      />
    </BlurBg>
  );
};

const LiftOfTracks = ({item}) => {
  return (
    <View
      style={[
        GlobalCSS.row,
        GlobalCSS.alignItemsCenter,
        GlobalCSS.padding.xmd,
        GlobalCSS.padding.ymd,
      ]}>
      {item.playing ? (
        <Feather name="play-circle" size={35} color={theme.colors.primary} />
      ) : (
        <View style={{width: 35, height: 35}} />
      )}
      <View style={[GlobalCSS.padding.xmd]}>
        <H1>{item.track}</H1>
        <H1>{item.artist}</H1>
      </View>
    </View>
  );
};

export default AllTracks;

const styles = StyleSheet.create({});
