import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {DarkBg, P, GlobalCSS, H1, H3} from './../../../components/basic';
import {theme} from '../../../theme';
import {Circle} from 'react-native-svg';
import {WhiteRoundBtn} from '../../../components/Common';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FullDivider} from '../../../components/Home';

const ClockSubSleep = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [playing, setPlaying] = useState(true);
  return (
    <DarkBg>
      <View
        style={[
          GlobalCSS.alignItemsCenter,
          GlobalCSS.justifyEvenly,
          GlobalCSS.flex,
        ]}>
        <AnimatedCircularProgress
          size={230}
          width={10}
          backgroundWidth={3}
          fill={12}
          lineCap="round"
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
          tintColor={theme.colors.primary}
          backgroundColor="grey">
          {fill => (
            <TouchableOpacity
              onPress={() => setPlaying(!playing)}
              style={[
                GlobalCSS.flex,
                GlobalCSS.alignItemsCenter,
                GlobalCSS.justifyCenter,
              ]}>
              <WhiteRoundBtn staticColor={theme.colors.accent} size={70}>
                {!playing ? (
                  <FontAwesome5
                    name="play"
                    size={30}
                    color={theme.colors.header}
                  />
                ) : (
                  <FontAwesome5
                    name="pause"
                    size={30}
                    color={theme.colors.header}
                  />
                )}
              </WhiteRoundBtn>
            </TouchableOpacity>
          )}
        </AnimatedCircularProgress>

        <View style={[GlobalCSS.fullWidth, GlobalCSS.padding.xxl]}>
          <View style={[GlobalCSS.row]}>
            <H1 lineHeight={60} size={60}>
              14:56
            </H1>
            <View style={[GlobalCSS.padding.xmd]}>
              <H3 size={12}>06:05 LEFT</H3>
              <FullDivider style={{opacity: 0.4}} />
              <H3>34:05s</H3>
            </View>
          </View>
          <FullDivider style={{opacity: 0.4}} />
          <View
            style={[
              GlobalCSS.row,
              GlobalCSS.justifyEnd,
              GlobalCSS.padding.ymd,
            ]}>
            <H1 lineHeight={60} size={60}>
              21:00
            </H1>
          </View>
        </View>
      </View>
      <View style={{paddingBottom: 100}} />
    </DarkBg>
  );
};

export default ClockSubSleep;

const styles = StyleSheet.create({});
