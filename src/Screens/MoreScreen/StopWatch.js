import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {DarkBg, GlobalCSS, H1, H3} from '../../components/basic';
import {FullDivider} from '../../components/Home';
import {PlusGreenBtn, WhiteRoundBtn} from '../../components/Common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../theme';
import DateTimePicker from '@react-native-community/datetimepicker';

const StopWatch = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [playing, setPlaying] = useState(true);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <DarkBg>
      <View
        style={[
          GlobalCSS.flex,
          GlobalCSS.alignItemsCenter,
          GlobalCSS.justifyCenter,
        ]}>
        <View
          style={[
            GlobalCSS.row,
            GlobalCSS.justifyCenter,
            GlobalCSS.padding.ymd,
            GlobalCSS.alignItemsCenter,
          ]}>
          <H1 lineHeight={100} size={100}>
            34:00
            <H1 lineHeight={50} size={50}>
              :34
            </H1>
          </H1>
        </View>
        <View
          style={[
            GlobalCSS.row,
            GlobalCSS.alignItemsCenter,
            GlobalCSS.justifyCenter,
            GlobalCSS.fullWidth,
          ]}>
          <WhiteRoundBtn size={50}>
            <MaterialCommunityIcons
              name="restart"
              size={25}
              color={!isDarkMode ? theme.colors.header : theme.colors.accent}
            />
          </WhiteRoundBtn>
          <View style={[GlobalCSS.padding.xmd]}>
            <PlusGreenBtn onPress={() => setPlaying(!playing)} size={85}>
              <Ionicons
                name={playing ? 'ios-pause-outline' : 'ios-play-outline'}
                size={30}
                color="white"
              />
            </PlusGreenBtn>
          </View>

          <WhiteRoundBtn size={50}>
            <H1>Lap</H1>
          </WhiteRoundBtn>
        </View>
        <View style={[GlobalCSS.fullWidth]}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            locale={'eng'}
            display="spinner"
            mode={mode}
            dateFormat="dayofweek day month"
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      </View>
    </DarkBg>
  );
};

export default StopWatch;

const styles = StyleSheet.create({});
