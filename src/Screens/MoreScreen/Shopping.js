import {
  StyleSheet,
  Text,
  View,
  Animated,
  useColorScheme,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {DarkBg, GlobalCSS, H2, H3, Heading, P} from '../../components/basic';
import {PlusGreenBtn} from '../../components/Common';
import Entypo from 'react-native-vector-icons/Entypo';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {theme} from '../../theme';
import {FullDivider} from '../../components/Home';
import {DeleteSwipe} from '../../components/More';

const data = [
  {
    id: 1,
    name: 'Protein Powder',
    amount: '$0.00',
  },
  {
    id: 2,
    name: 'Fish',
    amount: '$0.00',
  },
  {
    id: 3,
    name: 'Water',
    amount: '$0.00',
  },
];

const Shopping = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [lists, setLists] = useState(data);

  const deleteItem = index => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <DarkBg>
      <View
        style={[
          GlobalCSS.padding.ylg,
          GlobalCSS.padding.xmd,
          GlobalCSS.row,
          GlobalCSS.justifyBetween,
        ]}>
        <Heading>Inbox</Heading>
        <PlusGreenBtn>
          <Entypo name="plus" size={28} color="white" />
        </PlusGreenBtn>
      </View>

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <DeleteSwipe item={item} handleDelete={() => deleteItem(index)} />
          );
        }}
        ItemSeparatorComponent={() => <FullDivider style={{opacity: 0.2}} />}
      />
    </DarkBg>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  Delete: {
    backgroundColor: 'red',
  },

  actionText: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  Container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

const ListOfShopping = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        GlobalCSS.row,
        GlobalCSS.alignItemsCenter,
        GlobalCSS.padding.xmd,
      ]}>
      <Entypo
        name="circle"
        size={25}
        color={isDarkMode ? theme.colors.accent : theme.colors.bg}
      />
      <View style={[GlobalCSS.padding.xmd]}>
        <H2 font={'BebasNeue-Regular'}>hailo</H2>
        <P size={12} colorScheme={theme.colors.grey}>
          $19
        </P>
      </View>
    </View>
  );
};
