import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalCSS, H2, H3} from '../basic';

const IconBoxes = ({item, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => navigation.navigate(item.navigateto)}>
      {item.empty === true ? (
        <View style={[styles.box, styles.empty]} />
      ) : (
        <>
          <View
            style={[
              {
                backgroundColor: isDarkMode
                  ? theme.colors.lightgrey
                  : theme.colors.accent,
                ...theme.customShadow,
              },
              styles.box,
            ]}>
            {item.category === 'Entypo' ? (
              <Entypo name={item.icon} size={25} color={theme.colors.primary} />
            ) : item.category === 'Fontisto' ? (
              <Fontisto
                name={item.icon}
                size={25}
                color={theme.colors.primary}
              />
            ) : item.category === 'Feather' ? (
              <Feather
                name={item.icon}
                size={25}
                color={theme.colors.primary}
              />
            ) : item.category === 'Ionicons' ? (
              <Ionicons
                name={item.icon}
                size={25}
                color={theme.colors.primary}
              />
            ) : item.category === 'FontAwesome' ? (
              <FontAwesome
                name={item.icon}
                size={25}
                color={theme.colors.primary}
              />
            ) : item.category === 'AntDesign' ? (
              <AntDesign
                name={item.icon}
                size={25}
                color={theme.colors.primary}
              />
            ) : null}
          </View>
          <View style={[GlobalCSS.padding.ymd]}>
            <H3>{item.title}</H3>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default IconBoxes;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderRadius: 18,
  },
  empty: {
    height: 70,
    width: 70,
    backgroundColor: 'transparent',
  },
});
