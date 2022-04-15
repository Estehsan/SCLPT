import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BlurBg, GlobalCSS} from './../../components/basic';
import {Header} from './../../components/Auth';
import {Headline} from 'react-native-paper';
import {SmlLine} from './../../components/Home';
import {ListOfOnboarding} from './../../components/Auth';

const CategoryData = [
  {
    id: 1,
    category: 'Food',
  },
  {
    id: 2,
    category: 'Travel',
  },
  {
    id: 3,
    category: 'Entertainment',
  },
  {
    id: 4,

    category: 'Shopping',
  },
  {
    id: 1,
    category: 'Food',
  },
  {
    id: 2,
    category: 'Travel',
  },
  {
    id: 3,
    category: 'Entertainment',
  },
  {
    id: 4,

    category: 'Shopping',
  },
  {
    id: 5,
    category: 'Fashion',
  },
  {
    id: 6,
    category: 'Fitness',
  },
  {
    id: 7,
    category: 'Health',
  },

  {
    id: 9,
    category: 'Beauty',
  },
];

const OnBoardingTwo = ({navigation}) => {
  return (
    <BlurBg>
      {/* Top START 👇👇 */}

      <View style={[GlobalCSS.flex]}>
        <View style={[GlobalCSS.padding.xmd]}>
          <View style={[GlobalCSS.padding.ysm]} />

          <Headline style={{color: 'white'}}>Do you play sports?</Headline>
          <View style={[GlobalCSS.padding.ysm]} />
          <SmlLine />
        </View>

        {/* Top END 👆👆 */}

        {/* Main START 👇👇 */}

        <View style={styles.FlatList}>
          <FlatList
            data={CategoryData}
            numColumns={3}
            renderItem={({item}) => (
              <ListOfOnboarding navigation={navigation} Title={item.category} />
            )}
          />
        </View>

        {/* Main END 👆👆 */}
      </View>
    </BlurBg>
  );
};

export default OnBoardingTwo;

const styles = StyleSheet.create({
  FlatList: {paddingHorizontal: 10, paddingTop: 30},
});
