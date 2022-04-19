import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  useColorScheme,
  Platform,
  FlatList,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../theme';
import {DarkBg, GlobalCSS, H1} from '../../components/basic';
import {Avatar} from 'react-native-paper';
import {MessageBubble, MessageInput} from '../../components/More';
import DiscussionData from './../../assets/DiscussionData';

const Conversation = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {name, avatarImage} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="dots-three-vertical"
          size={20}
          color={theme.colors.grey}
        />
      ),
      headerTitle: () => (
        <View style={[GlobalCSS.alignItemsCenter]}>
          <Avatar.Image
            size={30}
            style={{backgroundColor: theme.colors.lightgrey}}
            source={{
              uri: avatarImage,
            }}
          />
          <H1 size={15} lineHeight={15}>
            {name}
          </H1>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <DarkBg>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={styles.container}>
        <FlatList
          data={DiscussionData.messages}
          inverted
          renderItem={({item}) => <MessageBubble item={item} />}
        />

        <MessageInput />
      </KeyboardAvoidingView>
    </DarkBg>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
