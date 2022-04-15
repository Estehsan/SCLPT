import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BlurBg,
  GlobalCSS,
  GreenBtn,
  TextInputField,
} from './../../components/basic';
import Header from './../../components/Auth/Header';
import {Caption, Headline, Paragraph, Subheading} from 'react-native-paper';
import {FullDivider} from './../../components/Home';

const SignUp = ({navigation}) => {
  return (
    <BlurBg>
      {/* Top START 👇👇 */}

      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <View style={[GlobalCSS.margin.yxl, GlobalCSS.alignItemsCenter]}>
          <Headline style={{color: 'white', fontSize: 30, paddingTop: 40}}>
            Start you journey
          </Headline>
        </View>
        <TextInputField
          placeholder="jondoe"
          title="UserName"
          value="password"
        />
        <View style={[GlobalCSS.padding.yxs]} />
        <TextInputField
          placeholder="jon@gmail.com"
          title="Email"
          value="password"
        />
        <View style={[GlobalCSS.padding.yxs]} />
        <TextInputField
          placeholder="6-8 letters"
          title="Password"
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
            title="Sign Up"
            onPress={() => navigation.navigate('OnBoardingOne')}
          />
        </View>
        <View style={[GlobalCSS.alignItemsCenter]}>
          <Paragraph style={{color: 'grey', letterSpacing: 1.5}}>
            By signing up, I agree to all{' '}
            <Paragraph
              textde
              style={{color: 'white', textDecorationLine: 'underline'}}>
              Terms
            </Paragraph>
          </Paragraph>
        </View>
      </View>
      {/* Top END 👆👆 */}

      {/* Bottom START 👇👇 */}
      <FullDivider />
      <View style={[GlobalCSS.alignItemsCenter, GlobalCSS.padding.ymd]}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Subheading style={{color: 'grey', textTransform: 'none'}}>
            Already have an account?
            <Subheading
              style={{color: 'white', textDecorationLine: 'underline'}}>
              Login
            </Subheading>
          </Subheading>
        </TouchableOpacity>
      </View>
      {/* Top END 👆👆 */}
    </BlurBg>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
