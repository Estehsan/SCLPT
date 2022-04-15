import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {BlurBg, GlobalCSS} from '../../components/basic';
import {Headline} from 'react-native-paper';
import {SmlLine} from '../../components/Home';
import ListOfPrograms from '../../components/Auth/ListOfPrograms';

const data = [
  {
    id: 1,
    Duration: '2-3',
  },
  {
    id: 2,
    Duration: '4-5',
  },
  {
    id: 3,
    Duration: '6-7',
  },
  {
    id: 4,
    Duration: '8-9',
  },
  {
    id: 5,
    Duration: '10-11',
  },
  {
    id: 6,
    Duration: '12-13',
  },
];

const OnBoardingThree = ({navigation}) => {
  return (
    <BlurBg>
      {/* Top START 👇👇 */}
      <View style={[GlobalCSS.flex]}>
        <View style={[GlobalCSS.padding.xmd]}>
          <View style={[GlobalCSS.padding.ysm]} />

          <Headline style={{color: 'white'}}>
            What Program Do you choose?
          </Headline>
          <View style={[GlobalCSS.padding.ysm]} />
          <SmlLine />
        </View>
        {/* Top END 👆👆 */}

        {/* Main START 👇👇 */}

        <View style={styles.FlatList}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListOfPrograms
                onPress={() => navigation.navigate('OnBoardingFour')}
                navigation={navigation}
                item={item}
              />
            )}
          />
        </View>

        {/* Main END 👆👆 */}
      </View>
    </BlurBg>
  );
};

export default OnBoardingThree;

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
