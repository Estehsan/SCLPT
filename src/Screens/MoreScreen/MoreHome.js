import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {IconBoxes} from '../../components/More';
import {DarkBg, GlobalCSS, H2} from '../../components/basic';
import {HeaderRightBtn} from '../../components/Common';
import {FullDivider} from '../../components/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';

const data = [
  {
    id: 1,
    icon: 'message-square',
    category: 'Feather',
    title: 'Chat',
    navigateto: 'Chat',
  },
  {
    id: 2,
    icon: 'fire',
    category: 'Fontisto',
    title: 'Mobility',
    navigateto: 'Mobility',
  },
  {
    id: 3,
    icon: 'stopwatch',
    category: 'Entypo',
    title: 'Stop Watch',
    navigateto: 'StopWatch',
  },
  {
    id: 4,
    category: 'Feather',
    icon: 'shopping-cart',
    title: 'Shopping',
    navigateto: 'Shopping',
  },
  {
    id: 5,
    icon: 'heart',
    category: 'Entypo',
    title: 'Recipe',
    navigateto: 'Recipe',
  },
  {
    id: 6,
    icon: 'ios-restaurant-outline',
    category: 'Ionicons',
    title: 'Sleep',
    navigateto: 'Sleep',
  },
  {
    id: 7,
    category: 'Fontisto',
    icon: 'music-note',
    title: 'Music',
    navigateto: 'Music',
  },
  {
    id: 8,
    category: 'Fontisto',
    icon: 'map-marker-alt',
    title: 'Map',
    navigateto: 'Map',
  },
];
const accountData = [
  {
    id: 1,
    icon: 'legal',
    category: 'FontAwesome',
    title: 'Legal',
    navigateto: 'Legal',
  },
  {
    id: 2,
    icon: 'player-settings',
    category: 'Fontisto',
    title: 'Settings',
    navigateto: 'Setting',
  },
  {
    id: 3,
    icon: 'infocirlceo',
    category: 'AntDesign',
    title: 'About',
    navigateto: 'About',
  },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return data;
};
const MoreHome = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.notification}>
          <Fontisto name="bell" color="grey" size={22} />
          <View style={styles.spacing} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <DarkBg>
      <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View>
                <View
                  style={[GlobalCSS.padding.ymd, GlobalCSS.alignItemsCenter]}>
                  <H2>MORE ON SCLPT</H2>
                </View>
                <FlatList
                  numColumns={3}
                  data={formatData(data, 3)}
                  renderItem={({item}) => (
                    <>
                      <IconBoxes navigation={navigation} item={item} />
                    </>
                  )}
                />

                <View
                  style={[GlobalCSS.padding.ymd, GlobalCSS.alignItemsCenter]}>
                  <H2>Account</H2>
                </View>
              </View>
            </>
          }
          data={formatData(accountData, 3)}
          renderItem={({item}) => (
            <>
              <IconBoxes navigation={navigation} item={item} />
            </>
          )}
        />
        <View style={{paddingBottom: 100}} />
      </View>
    </DarkBg>
  );
};

export default MoreHome;

const styles = StyleSheet.create({
  notification: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginTop: 7,
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
});
