import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import PlusGreenBtn from '../../components/Common/PlusGreenBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import {ConversationList} from '../../components/More';
import FullDivider from '../../components/Home/FullDivider';

const MessageData = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '30 Min Ago',
    avatarImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8pQeC2FQr--vD0sX1S2on8bETPv2yUKd3Q&usqp=CAU',
  },
  {
    id: 2,
    name: 'Michael ',
    message: 'Hello, Where are you ? 😊',
    time: '10 Min Ago',
    avatarImage:
      'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
  },
  {
    id: 3,
    name: 'Shawn',
    message: 'Not responding',
    time: '50 Min Ago',
    avatarImage:
      'https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864',
  },
  {
    id: 4,
    name: 'John Doe',
    message: 'Hello, how are you?👍 👍',
    time: '30 Min Ago',
    avatarImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8pQeC2FQr--vD0sX1S2on8bETPv2yUKd3Q&usqp=CAU',
  },
  {
    id: 5,
    name: 'Michael ',

    message: '🚀🚀🚀🚀🚀',
    time: '10 Min Ago',
    avatarImage:
      'https://static.vecteezy.com/system/resources/previews/002/275/847/original',
  },
];
const Chat = () => {
  return (
    <DarkBg>
      {/* Main START 👇👇 */}
      <View style={[GlobalCSS.padding.xmd, GlobalCSS.flex]}>
        <View
          style={[
            GlobalCSS.padding.ylg,
            GlobalCSS.row,
            GlobalCSS.justifyBetween,
          ]}>
          <Heading>Inbox</Heading>
          <PlusGreenBtn onPress={() => {}}>
            <Entypo name="plus" size={28} color="white" />
          </PlusGreenBtn>
        </View>

        <FlatList
          data={MessageData}
          ItemSeparatorComponent={() => <FullDivider style={{opacity: 0.2}} />}
          renderItem={({item}) => <ConversationList item={item} />}
        />
      </View>

      {/* Main END 👆👆 */}
    </DarkBg>
  );
};

export default Chat;

const styles = StyleSheet.create({});
