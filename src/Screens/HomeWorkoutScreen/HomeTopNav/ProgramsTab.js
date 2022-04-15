import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Headline} from 'react-native-paper';
import {DarkBg, GlobalCSS, Heading, HL} from '../../../components/basic';
import PlusGreenBtn from '../../../components/Common/PlusGreenBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import ListOfPrograms from '../../../components/Auth/ListOfPrograms';

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

const ProgramsTab = ({navigation}) => {
  return (
    <DarkBg>
      {/* Main START 👇👇 */}

      <View style={styles.FlatList}>
        <FlatList
          ListHeaderComponent={
            <View
              style={[
                GlobalCSS.padding.ylg,
                GlobalCSS.row,
                GlobalCSS.justifyBetween,
              ]}>
              <Heading>Programs</Heading>
              <PlusGreenBtn onPress={() => {}}>
                <Entypo name="plus" size={28} color="white" />
              </PlusGreenBtn>
            </View>
          }
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ListOfPrograms
              onPress={() =>
                navigation.navigate('ProgramScreen', {
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

export default ProgramsTab;

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
});
