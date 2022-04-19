import {
  StyleSheet,
  Text,
  View,
  Image,
  ToubheableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {
  BlurBg,
  DarkBg,
  GlobalCSS,
  H3,
  Heading,
  P,
} from '../../components/basic';
import {HeaderTopBar} from '../../components/Common';
import {theme} from '../../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const imgLink =
  'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const Music = ({navigation}) => {
  const [play, setPlay] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <BlurBg imgLink={imgLink}>
      <HeaderTopBar
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <View style={[GlobalCSS.justifyCenter, GlobalCSS.alignItemsCenter]}>
          <Heading>Guil Trip</Heading>
          <Text style={styles.underlineText}>Kanye West</Text>
        </View>

        {/* Cover Photo */}
        <View
          style={[
            GlobalCSS.alignItemsCenter,
            GlobalCSS.fullWidth,
            {
              ...theme.customShadow,
            },
          ]}>
          <Image
            style={{height: 300, width: 300}}
            source={{
              uri: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            }}
          />
        </View>

        {/* Music Player Buttons */}
        <View
          style={[
            GlobalCSS.row,
            GlobalCSS.justifyEvenly,
            GlobalCSS.alignItemsCenter,
          ]}>
          <SimpleLineIcons
            name="refresh"
            size={30}
            color={isDarkMode ? theme.colors.accent : theme.colors.bg}
          />
          <Ionicons
            name="ios-play-skip-back-outline"
            size={30}
            color={isDarkMode ? theme.colors.accent : theme.colors.bg}
          />
          <TouchableOpacity
            style={[
              styles.Touch,
              {
                backgroundColor: isDarkMode
                  ? theme.colors.header
                  : theme.colors.twhite,
              },
            ]}
            onPress={() => setPlay(!play)}>
            {!play ? (
              <FontAwesome5
                name="play"
                size={30}
                color={isDarkMode ? theme.colors.accent : theme.colors.bg}
              />
            ) : (
              <FontAwesome5
                name="pause"
                size={30}
                color={isDarkMode ? theme.colors.accent : theme.colors.bg}
              />
            )}
          </TouchableOpacity>
          <Ionicons
            name="ios-play-skip-forward-outline"
            size={30}
            color={isDarkMode ? theme.colors.accent : theme.colors.bg}
          />
          <Ionicons
            name="shuffle-outline"
            size={30}
            color={isDarkMode ? theme.colors.accent : theme.colors.bg}
          />
        </View>
      </View>
      {/* Bottom Button Of Track */}
      <View style={{flex: 1 / 3}}>
        <View
          style={[
            GlobalCSS.flexEnd,
            GlobalCSS.justifyCenter,
            GlobalCSS.alignItemsCenter,
          ]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AllTracks', {
                bgImg: imgLink,
              })
            }
            style={[GlobalCSS.alignItemsCenter]}>
            <H3>ALL TRACKS</H3>
            <View>
              <Entypo
                style={{opacity: 0.3}}
                name="chevron-thin-down"
                size={14}
                color={isDarkMode ? theme.colors.accent : theme.colors.bg}
              />
              <Entypo
                style={{opacity: 0.7}}
                name="chevron-thin-down"
                size={14}
                color={isDarkMode ? theme.colors.accent : theme.colors.bg}
              />
              <Entypo
                style={{opacity: 1}}
                name="chevron-thin-down"
                size={14}
                color={isDarkMode ? theme.colors.accent : theme.colors.bg}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </BlurBg>
  );
};

export default Music;

const styles = StyleSheet.create({
  underlineText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.primary,
    color: theme.colors.primary,
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
  },
  Touch: {
    padding: 30,
    backgroundColor: 'black',
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 2,
    margin: 5,
  },
});
