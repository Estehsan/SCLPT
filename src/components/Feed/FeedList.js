import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {GlobalCSS, H2, H3, P, PGrey} from '../basic';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider} from '../../components/Home/Divider';
import FullDivider from '../Home/FullDivider';

const FeedList = ({item}) => {
  const {title, image, time, location, like, comment, share, profileImage} =
    item;
  return (
    <View>
      <View style={[GlobalCSS.row, GlobalCSS.flex, {...theme.customShadow2}]}>
        <View style={[GlobalCSS.alignItemsCenter, GlobalCSS.padding.xsm]}>
          <Image
            style={{height: 50, width: 50, borderRadius: 50}}
            source={{
              uri: profileImage,
            }}
          />

          <View style={styles.line} />
        </View>

        {/* Right Content */}
        <View style={[GlobalCSS.flex]}>
          <H2 font="Montserrat-SemiBold">{title}</H2>
          <H3 color={theme.colors.grey}>{time}</H3>

          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />

          <View
            style={[
              GlobalCSS.justifyEvenly,
              GlobalCSS.row,
              GlobalCSS.padding.ymd,
            ]}>
            <View
              style={[GlobalCSS.row, GlobalCSS.alignItemsCenter, styles.like]}>
              <Entypo name="heart" size={20} color={theme.colors.lightgrey} />
              <View style={[GlobalCSS.padding.xxs]} />
              <H3 color={theme.colors.grey}>{like}</H3>
            </View>
            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.alignItemsCenter,
                styles.comment,
              ]}>
              <FontAwesome
                name="comment"
                size={20}
                color={theme.colors.lightgrey}
              />
              <View style={[GlobalCSS.padding.xxs]} />

              <H3 color={theme.colors.grey}>{comment}</H3>
            </View>
            <View
              style={[GlobalCSS.row, GlobalCSS.alignItemsCenter, styles.share]}>
              <Ionicons
                name="ios-share"
                size={20}
                color={theme.colors.lightgrey}
              />
              <View style={[GlobalCSS.padding.xxs]} />
              <H3 color={theme.colors.grey}>{share}</H3>
            </View>
          </View>
          <FullDivider style={{opacity: 0.2}} />
        </View>
      </View>
    </View>
  );
};

export default FeedList;

const styles = StyleSheet.create({
  image: {
    width: '98%',
    height: 200,
    borderRadius: 15,
  },
  line: {
    height: '100%',
    width: 2,
    backgroundColor: theme.colors.lightgrey,
  },
});
