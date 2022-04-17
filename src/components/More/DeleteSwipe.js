import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GlobalCSS, H2, P} from '../basic';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../theme';
import {FlatList} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = ({item, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, SCREEN_WIDTH],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <MaterialIcons name="delete" size={24} color="white" />
          <H2>Delete</H2>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View
        style={[
          GlobalCSS.row,
          GlobalCSS.alignItemsCenter,
          GlobalCSS.padding.xmd,
          ,
          {height: 80},
        ]}>
        <Entypo
          name="circle"
          size={25}
          color={isDarkMode ? theme.colors.accent : theme.colors.bg}
        />
        <View style={[GlobalCSS.padding.xmd]}>
          <H2 font={'BebasNeue-Regular'}>{item.name}</H2>
          <P size={12} colorScheme={theme.colors.grey}>
            {item.amount}
          </P>
        </View>
      </View>
    </Swipeable>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
  },
  deleteBox: {
    backgroundColor: 'red',
    height: 80,
    flexDirection: 'row',
    display: 'flex',
    width: 90,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
