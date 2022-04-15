import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, GreenBtn, HL, P} from '../../components/basic';
import {Headline, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import H1 from '../../components/basic/H1';

const OnBoardingFive = ({navigation}) => {
  return (
    <DarkBg>
      <View style={styles.Center}>
        <Image
          source={require('./../../assets/images/ArtWorkSucess.png')}
          style={{height: 200, width: 200}}
        />
        <View style={[GlobalCSS.padding.ylg]}>
          <HL> ARE YOU READY !</HL>
        </View>
        <View style={[GlobalCSS.padding.xxl]}>
          <P Align="center" colorScheme="grey">
            Nam mi nisl, egestas quis nisl nec, convallis maximus ex.
            Pellentesque et erat ac felis euismod ullamcorper.
          </P>
        </View>
        <View style={[GlobalCSS.padding.yxl, GlobalCSS.padding.xlg]}>
          <View>
            <GreenBtn
              navigation={navigation}
              onPress={() => navigation.navigate('BottomTabNavi')}
              title="Continue    ">
              <Icon size={22} name="chevron-right" color="white" />
            </GreenBtn>
          </View>
        </View>
      </View>
    </DarkBg>
  );
};

export default OnBoardingFive;

const styles = StyleSheet.create({
  Center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
