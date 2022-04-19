import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BlurBg, DarkBg} from '../../components/basic';
import {HeaderTopBar} from '../../components/Common';

const AllTracks = ({route, navigation}) => {
  const {bgImag} = route.params;
  return (
    <BlurBg imgLink={bgImg}>
      <LiftOfTracks />
    </BlurBg>
  );
};

const LiftOfTracks = ({route, navigation}) => {
  const {imgLink} = route.params;
  return (
    <DarkBg imgLink={imgLink}>
      <Text>naik</Text>
    </DarkBg>
  );
};

export default AllTracks;

const styles = StyleSheet.create({});
