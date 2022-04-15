import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import {
  GlobalCSS,
  GreenBtn,
  ImageBg,
  P,
  WhiteBtn,
} from '../../components/basic';
import {Divider} from '../../components/Home';
import {Paragraph, Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme';

const Front = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ImageBg>
      {/* Top START 👇👇 */}

      <View style={styles.Top}>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={{height: 100, width: 120}}
          resizeMode="contain"
        />
        <View style={[GlobalCSS.padding.ymd]} />
        <Text style={styles.title}>SCLPT</Text>
        <Text style={styles.subtitle}>
          Success starts with self-discipline.
        </Text>
      </View>

      {/* Top END 👆👆 */}

      {/* Bottom START 👇👇 */}

      <View style={styles.Bottom}>
        <View
          style={[
            GlobalCSS.justifyCenter,
            GlobalCSS.alignItemsCenter,
            GlobalCSS.alignContentCenter,
            GlobalCSS.padding.xlg,
          ]}>
          <GreenBtn
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Divider />
          <WhiteBtn onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </WhiteBtn>
          <View style={styles.ForgotSession}>
            <Ionicons
              name="ios-lock-open"
              size={20}
              color={theme.colors.white}
            />
            <P>Forgot Password</P>
          </View>
        </View>
      </View>

      {/* Bottom END 👆👆 */}
    </ImageBg>
  );
};

export default Front;

const styles = StyleSheet.create({
  Top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ForgotSession: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 40,
  },
  Forgot: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '900',
    paddingHorizontal: 5,
    fontFamily: 'Montserrat-Regular',
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: 'white',
    fontFamily: 'BebasNeue-Regular',
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    opacity: 0.7,
    width: '70%',
    textAlign: 'center',
  },
});
