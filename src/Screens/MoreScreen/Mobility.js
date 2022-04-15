import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import {PlusGreenBtn} from '../../components/Common';
import Entypo from 'react-native-vector-icons/Entypo';
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
const Mobility = ({navigation}) => {
  return (
    <DarkBg>
      {/* Main START 👇👇 */}

      <View style={[GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={
            <View
              style={[
                GlobalCSS.padding.ylg,
                GlobalCSS.row,
                GlobalCSS.justifyBetween,
              ]}>
              <Heading>ROUTINE</Heading>
            </View>
          }
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ListOfPrograms
              onPress={() =>
                navigation.navigate('Routine', {
                  id: item.id,
                  Duration: item.Duration,
                })
              }
              navigation={navigation}
              item={item}
            />
          )}
        />
      </View>
      <View style={{paddingBottom: 100}} />

      {/* Main END 👆👆 */}
    </DarkBg>
  );
};

export default Mobility;

const styles = StyleSheet.create({});
