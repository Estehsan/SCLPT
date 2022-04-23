import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonTitleHeader} from '../../../components/Common';
import {
  DarkBg,
  GlobalCSS,
  GreenBtn,
  P,
  TextInputField,
} from '../../../components/basic';
import {Switch} from 'react-native-paper';
import {theme} from '../../../theme';
import Entypo from 'react-native-vector-icons/Entypo';

const AddGoals = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <DarkBg>
      <CommonTitleHeader title={'ADD a goal'} />

      <View style={[GlobalCSS.padding.xmd]}>
        <TextInputField
          darkmode
          placeholder="6-8 letters"
          title="Password"
          value="password"
        />
        <View style={[GlobalCSS.padding.yxs]} />

        <TextInputField
          darkmode
          placeholder="6-8 letters"
          title="Password"
          value="password"
        />
        <View style={[GlobalCSS.padding.yxs]} />

        <TextInputField
          darkmode
          placeholder="6-8 letters"
          title="Password"
          value="password"
        />
        <View style={[GlobalCSS.padding.yxs]} />

        <TextInputField
          darkmode
          placeholder="6-8 letters"
          title="Password"
          value="password"
        />
        <View style={[GlobalCSS.padding.yxs]} />

        <View
          style={[
            GlobalCSS.row,
            GlobalCSS.padding.xsm,
            GlobalCSS.justifyBetween,
            GlobalCSS.padding.yxs,
          ]}>
          <P>Add a remember?</P>
          <Switch
            color={theme.colors.primary}
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
        </View>
        <View style={[GlobalCSS.padding.ymd]}>
          <GreenBtn
            title="ADD A TASK"
            LeftIcon="true"
            onPress={() => navigation.navigate('')}>
            <Entypo name="plus" size={20} color={'#fff'} />
          </GreenBtn>
        </View>
      </View>
    </DarkBg>
  );
};

export default AddGoals;

const styles = StyleSheet.create({});
