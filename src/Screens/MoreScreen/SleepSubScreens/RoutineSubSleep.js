import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DarkBg,
  GlobalCSS,
  GreenBtn,
  H1,
  Heading,
  TextInputField,
} from '../../../components/basic';

const RoutineSubSleep = () => {
  return (
    <DarkBg>
      <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
        <Heading>MY SLEEP ROUTINE</Heading>
        <TextInputField
          placeholder="7:00 AM"
          title="Sleep Time"
          value="password"
        />
        <TextInputField
          placeholder="5:00 AM"
          title="Wakeup time"
          value="password"
        />
        <TextInputField
          placeholder="Hip hope tone"
          title="Ringtone"
          value="password"
        />
        <TextInputField
          placeholder="Everyday"
          title="Schedule"
          value="password"
        />
        <View style={[GlobalCSS.padding.ymd]}>
          <GreenBtn>
            <H1>SAVE ROUTINE</H1>
          </GreenBtn>
        </View>
      </View>
    </DarkBg>
  );
};

export default RoutineSubSleep;

const styles = StyleSheet.create({});
