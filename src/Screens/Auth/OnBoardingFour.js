import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  BlurBg,
  GlobalCSS,
  GreenBtn,
  TextInputField,
} from '../../components/basic';
import {Avatar, Headline, Paragraph, Title} from 'react-native-paper';
import {theme} from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FullDivider} from '../../components/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OnBoardingFour = ({navigation}) => {
  return (
    <BlurBg>
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <ScrollView showsVerticalScrollIndicator="false">
          <View style={[GlobalCSS.margin.yxl, GlobalCSS.alignItemsCenter]}>
            <View style={styles.Avatar}>
              <Ionicons size={30} name="image" color="white" />
            </View>
            <Title style={{color: 'white'}}>ADD PROFILE PICTURE</Title>
          </View>
          <View style={{opacity: 0.5, marginBottom: 10}}>
            <FullDivider />
          </View>

          <TextInputField
            placeholder="jondoe"
            title="First Name"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />
          <TextInputField
            placeholder="Doe"
            title="Last Name"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />
          <TextInputField
            placeholder="6-8 letters"
            title="Sex"
            value="Select an Answer"
          />
          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />

          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />
          <View style={[GlobalCSS.padding.yxs]} />

          <TextInputField
            placeholder="6-8 letters"
            title="Repeat Password"
            value="password"
          />

          <View style={[GlobalCSS.padding.yxs]} />

          <View style={[GlobalCSS.padding.ylg]}>
            <GreenBtn
              onPress={() => navigation.navigate('OnBoardingFive')}
              title="Continue    ">
              <Icon size={22} name="chevron-right" color="white" />
            </GreenBtn>
          </View>
          <View style={[GlobalCSS.alignItemsCenter]}>
            <Paragraph style={{color: 'grey', letterSpacing: 1.5}}>
              WE KEEP YOUR INFORMATION SAFE
            </Paragraph>
          </View>
        </ScrollView>
      </View>
      {/* Top END 👆👆 */}
    </BlurBg>
  );
};

export default OnBoardingFour;

const styles = StyleSheet.create({
  Avatar: {
    backgroundColor: theme.colors.grey,
    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
