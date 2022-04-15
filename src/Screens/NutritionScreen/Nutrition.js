import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import ListOfPrograms from '../../components/Auth/ListOfPrograms';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';

const data = [
  {
    id: 1,
    Duration: '2-3',
    fill: 40,
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

const Nutrition = ({navigation}) => {
  const [fill, setFill] = useState(20);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.notification}>
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
    <DarkBg>
      {/* Main START 👇👇 */}
      <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
        <View style={styles.FlatList}>
          <FlatList
            ListHeaderComponent={
              <View
                style={[
                  GlobalCSS.padding.ylg,
                  GlobalCSS.row,
                  GlobalCSS.justifyBetween,
                ]}>
                <Heading>SELECT A PROGRAM</Heading>
              </View>
            }
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ListOfPrograms
                onPress={() =>
                  navigation.navigate('MealWeekly', {
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
      </View>
      {/* Main END 👆👆 */}
    </DarkBg>
  );
};

export default Nutrition;

const styles = StyleSheet.create({
  notification: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
