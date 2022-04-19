import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {PlusGreenBtn} from './../../Common';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../../theme';

const MessageInput = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.greyIcon}>
        <Entypo name="emoji-happy" size={25} color={'#aaaaaa'} />
      </TouchableOpacity>
      <TextInput
        placeholderTextColor={theme.colors.grey}
        placeholder="Type a message"
        style={styles.input}
      />
      <TouchableOpacity style={styles.greyIcon}>
        <Entypo name="plus" size={25} color={'#aaaaaa'} />
      </TouchableOpacity>
      <PlusGreenBtn size={50}>
        <MaterialIcons name="send" size={25} color={'#fff'} />
      </PlusGreenBtn>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: theme.colors.header,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: theme.colors.grey,
  },
  greyIcon: {
    borderRadius: 30,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#504e5466',
    ...theme.customShadow,
  },
});
