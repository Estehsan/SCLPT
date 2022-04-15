import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BlurBg,
  GlobalCSS,
  GreenBtn,
  TextInputField,
} from './../../components//basic';
import {VibrancyView} from '@react-native-community/blur';

import {Divider, FullDivider} from './../../components//Home';
import {Header} from './../../components//Auth';
import {
  Headline,
  Button,
  Caption,
  Paragraph,
  Subheading,
} from 'react-native-paper';
const Login = ({navigation}) => {
  return (
    <BlurBg>
      {/* Top START 👇👇 */}

      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <View style={[GlobalCSS.margin.yxl, GlobalCSS.alignItemsCenter]}>
          <Headline style={{color: 'white', fontSize: 30, paddingTop: 40}}>
            Welcome Back
          </Headline>
        </View>
        <TextInputField placeholder="" title="UserName" value="password" />
        <TextInputField placeholder="" title="Password" />
        <View style={[GlobalCSS.padding.ysm]} />
        <GreenBtn title="Login" />
        <View style={[GlobalCSS.padding.ysm]}>
          <Divider />
        </View>
        <Button
          icon="facebook"
          mode="contained"
          color="#fff"
          light={true}
          style={styles.socialBtn}
          onPress={() => console.log('Pressed')}>
          Log in with facebook
        </Button>
        <View style={[GlobalCSS.padding.ysm]} />
        <Button
          icon="google"
          mode="contained"
          color="#fff"
          light={true}
          style={styles.socialBtn}
          onPress={() => console.log('Pressed')}>
          Log in with Google
        </Button>
      </View>
      {/* Top END 👆👆 */}

      {/* Bottom START 👇👇 */}

      <FullDivider />
      <View style={[GlobalCSS.alignItemsCenter, GlobalCSS.padding.ymd]}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Subheading style={{color: 'grey'}}>
            New to this experice?
            <Subheading style={{color: 'white'}}> Sign up</Subheading>
          </Subheading>
        </TouchableOpacity>
      </View>
      {/* Top END 👆👆 */}
    </BlurBg>
  );
};

export default Login;

const styles = StyleSheet.create({
  socialBtn: {
    // backgroundColor: 'white',
    color: 'red',
    borderRadius: 50,
    alignItems: 'center',
    paddingVertical: 5,
  },
});
