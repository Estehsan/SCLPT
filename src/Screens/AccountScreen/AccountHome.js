import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useColorScheme,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {H1, Heading, HL, GlobalCSS} from '../../components/basic';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';
import {Headline} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountListOptions} from '../../components/Account';
import FullDivider from '../../components/Home/FullDivider';

const dataOptions = [
  {
    id: 1,
    title: 'My Achivements',
    icon: 'medal',
    iconCategory: 'MaterialCommunityIcons',
  },
  {id: 2, title: 'Connect a Device', icon: 'watch', iconCategory: 'Feather'},
  {
    id: 3,
    title: 'Edit Profile',
    icon: 'user',
    iconCategory: 'Anticon',
  },
  {
    id: 4,
    title: 'Terms & Conditions',
    icon: 'alert-circle',
    iconCategory: 'Feather',
  },
  {
    id: 5,
    title: 'Settings',
    icon: 'settings-outline',
    iconCategory: 'Ionicons',
  },
];

const AccountHome = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ImageBackground
      source={require('./../../assets/images/BackgroundImageAccount.jpg')}
      resizeMode="cover"
      imageStyle={{height: '60%'}}
      style={styles.Main}>
      <LinearGradient
        colors={
          isDarkMode
            ? ['black', 'black', 'transparent']
            : ['white', 'white', 'transparent']
        }
        start={{x: 1, y: 0.5}}
        end={{x: 1, y: 1}}
        useAngle={true}
        angle={0}
        style={styles.Main}>
        <SafeAreaView style={[GlobalCSS.padding.xmd]}>
          <View>
            {/* Header */}
            <View style={styles.Header}>
              <View style={styles.HeaderLeft}>
                <Text style={styles.HeaderText}>My</Text>
              </View>
              <View style={styles.headerCenter}>
                <H1 color="#fff">My Acount</H1>
              </View>
              <View style={styles.HeaderRight}>
                <View style={styles.notification}>
                  <Fontisto name="bell" color="white" size={22} />
                  <View style={styles.spacing} />
                </View>
              </View>
            </View>
            {/* Header End */}

            {/* Top Profile and Program  START*/}
            <View style={[GlobalCSS.alignItemsCenter]}>
              <View style={styles.ImageSection}>
                <View style={styles.ImageContainer}>
                  <Image
                    source={{
                      uri: 'https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864',
                    }}
                    resizeMode="cover"
                    style={{
                      height: 100,
                      width: 100,
                      backgroundColor: 'grey',
                      borderRadius: 100,
                    }}
                  />
                </View>

                <View style={styles.iconContainer}>
                  <Entypo name="camera" size={20} color="grey" />
                </View>

                <Heading>Martin SHLANSKY</Heading>
                <View
                  style={[
                    GlobalCSS.row,
                    GlobalCSS.alignItemsCenter,
                    GlobalCSS.justifyCenter,
                  ]}>
                  <MaterialCommunityIcons
                    name="medal"
                    size={30}
                    color={theme.colors.primary}
                  />
                  <Text style={styles.Athlete}>Super Athlete</Text>
                </View>
              </View>
            </View>

            {/* Top Profile and Program END */}
          </View>
          {/* LIST CONTAINER START */}

          <View
            style={[
              styles.ListContainer,
              GlobalCSS.round.lg,
              GlobalCSS.padding.yxl,
              GlobalCSS.margin.yxl,

              {
                backgroundColor: isDarkMode
                  ? theme.colors.tabColor
                  : theme.colors.accent,
                ...theme.customShadow,
              },
            ]}>
            <FlatList
              data={dataOptions}
              ItemSeparatorComponent={() => (
                <FullDivider style={{opacity: 0.3, marginVertical: 10}} />
              )}
              renderItem={({item}) => (
                <AccountListOptions
                  title={item.title}
                  icon={item.icon}
                  iconCategory={item.iconCategory}
                  navigation={navigation}
                  onPress={item.onPress}
                />
              )}
            />
          </View>

          {/* LIST CONTAINER END */}
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default AccountHome;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginTop: 7,
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
  Athlete: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  ImageContainer: {
    borderRadius: 100,
    padding: 5,
    borderWidth: 2,
    borderColor: '#00FF41',
    marginVertical: 20,
  },
  ImageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 80,
    right: 50,
    backgroundColor: theme.colors.white,
    borderRadius: 100,
    padding: 10,
  },
  ListContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
