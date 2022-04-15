import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {DarkBg, GreenBtn, P, WhiteBtn} from '../../components/basic';
import {theme} from '../../theme';
import {GlobalCSS} from '../../components/basic';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

const AddPost = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = useState('');

  return (
    <DarkBg>
      <View style={[GlobalCSS.padding.xlg]}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.input}
            placeholder="Write Something..."
            placeholderTextColor={theme.colors.grey}
            onChangeText={onChangeText}
            value={text}
            multiline={true}
          />
        </View>

        {/* LIST OF ROW ICONS */}
        <View
          style={[
            GlobalCSS.row,
            GlobalCSS.justifyEvenly,
            GlobalCSS.alignItemsCenter,
          ]}>
          <TouchableOpacity
            style={[
              GlobalCSS.justifyCenter,
              GlobalCSS.alignItemsCenter,
              GlobalCSS.padding.ylg,
            ]}>
            <View
              style={[
                styles.IconShape,
                {
                  backgroundColor: isDarkMode
                    ? theme.colors.header
                    : theme.colors.accent,
                },
              ]}>
              <Entypo name="camera" size={24} color={theme.colors.primary} />
            </View>
            <P>Photo/Video</P>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GlobalCSS.justifyCenter,
              GlobalCSS.alignItemsCenter,
              GlobalCSS.padding.ylg,
            ]}>
            <View
              style={[
                styles.IconShape,
                {
                  backgroundColor: isDarkMode
                    ? theme.colors.header
                    : theme.colors.accent,
                },
              ]}>
              <Foundation name="photo" size={24} color={theme.colors.primary} />
            </View>
            <P>Camera</P>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GlobalCSS.justifyCenter,
              GlobalCSS.alignItemsCenter,
              GlobalCSS.padding.ylg,
            ]}>
            <View
              style={[
                styles.IconShape,
                {
                  backgroundColor: isDarkMode
                    ? theme.colors.header
                    : theme.colors.accent,
                },
              ]}>
              <MaterialCommunityIcons
                name="weight-lifter"
                size={24}
                color={theme.colors.primary}
              />
            </View>
            <P>Feeling</P>
          </TouchableOpacity>
        </View>

        <View>
          <GreenBtn
            title="ADD POST"
            LeftIcon="true"
            onPress={() => navigation.navigate('')}>
            <Entypo name="plus" size={20} color={theme.colors.primary} />
          </GreenBtn>
        </View>
      </View>
    </DarkBg>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  TextInput: {
    paddingVertical: 30,
  },
  input: {
    height: 300,
    color: theme.colors.grey,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 40,
    borderWidth: 0,
    paddingVertical: 10,
  },
  IconShape: {
    marginBottom: 10,
    height: 70,
    width: 70,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
