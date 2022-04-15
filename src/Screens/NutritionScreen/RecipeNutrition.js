import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  useColorScheme,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DarkBg, GlobalCSS, H2, H3, HL, P, PGrey} from '../../components/basic';
import {theme} from '../../theme';
import {FullDivider} from '../../components/Home';
import LinearGradient from 'react-native-linear-gradient';
const data = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1648737966837-66cc4a189b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },

  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1599747920141-e7e5901de37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=299&q=80',
  },
];
const recipeItems = [
  {
    title: 'CALORIES',
    quantity: '100',
  },
  {
    title: 'FAT',
    quantity: '12G',
  },
  {
    title: 'CARBS',
    quantity: '31G',
  },
  {
    title: 'PROTEIN',
    quantity: '100',
  },
  {
    title: 'SODIUM',
    quantity: '396MG',
  },
];
const INGREDIENTS = [
  {
    id: 1,
    title: '1/2 cup (60 mL) water',
  },
  {
    id: 2,
    title: '1/2 cup (60 mL) water',
  },
  {
    id: 3,
    title: '1/2 cup (60 mL) water',
  },
  {
    id: 4,
    title: '1/2 cup (60 mL) water',
  },
];

const RecipeNutrition = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <DarkBg>
      <ScrollView>
        <View style={styles.imgContainer}>
          <FlatList
            data={data}
            snapToAlignment={'start'}
            horizontal
            snapToInterval={Dimensions.get('window').width}
            showsHorizontalScrollIndicator={true}
            decelerationRate={'fast'}
            renderItem={({item}) => (
              <Image
                resizeMode="cover"
                source={{uri: item.img}}
                style={{
                  height: '100%',
                  width: Dimensions.get('window').width,
                  borderRadius: 20,
                }}
              />
            )}
          />
        </View>

        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ylg]}>
          <HL size={40}>PANCAKES</HL>
          <View style={[GlobalCSS.row]}>
            <AntDesign name="star" size={20} color={'#ffd700'} />
            <AntDesign name="star" size={20} color={'#ffd700'} />
            <AntDesign name="star" size={20} color={'#ffd700'} />
            <AntDesign name="star" size={20} color={'#ffd700'} />
            <AntDesign name="star" size={20} color={'#ffd70080'} />
            <H3> (4 RATINGS)</H3>
          </View>

          {/* TABLE CHART */}

          <View
            style={[
              GlobalCSS.fullWidth,
              GlobalCSS.padding.ysm,
              GlobalCSS.round.md,
              GlobalCSS.margin.ymd,
              {
                backgroundColor: isDarkMode
                  ? theme.colors.header
                  : theme.colors.accent,
                ...theme.customShadow,
              },
            ]}>
            {recipeItems.map((item, index) => (
              <View
                style={[
                  GlobalCSS.row,
                  GlobalCSS.padding.xmd,
                  GlobalCSS.padding.ysm,
                  GlobalCSS.justifyBetween,
                  {
                    backgroundColor:
                      index % 2 === 1
                        ? isDarkMode
                          ? theme.colors.header
                          : theme.colors.accent
                        : isDarkMode
                        ? theme.colors.bg
                        : theme.colors.lightbg,
                  },
                ]}>
                <H2>{item.title}:</H2>
                <H2>{item.quantity}</H2>
              </View>
            ))}
          </View>
          {/* TIME RECIPE BOX */}
          <View style={[GlobalCSS.padding.ymd]}>
            <View style={[GlobalCSS.padding.ysm]}>
              <HL size={40}>RECIPE</HL>
            </View>
            <FullDivider style={{opacity: 0.5}} />
            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.justifyEvenly,
                GlobalCSS.padding.ymd,
              ]}>
              <View style={[]}>
                <PGrey>PREP TIME</PGrey>
                <H2>5Min</H2>
              </View>
              <LinearGradient
                colors={['transparent', 'white', 'transparent']}
                start={{x: 0.01, y: 1}}
                end={{x: 1, y: 1}}
                style={styles.DividerStraight}
              />
              <View style={[]}>
                <PGrey>COOK TIME</PGrey>
                <H2>5Min</H2>
              </View>
              <LinearGradient
                colors={['transparent', 'white', 'transparent']}
                start={{x: 0.01, y: 1}}
                end={{x: 1, y: 1}}
                style={styles.DividerStraight}
              />
              <View style={[]}>
                <PGrey>SERVING</PGrey>
                <H2>8</H2>
              </View>
            </View>
            <FullDivider style={{opacity: 0.5}} />
          </View>
          {/* TIME RECIPE END */}

          {/* INGREDIENTS */}

          <View style={[GlobalCSS.padding.ymd]}>
            <HL size={40}>INGREDIENTS</HL>
            {INGREDIENTS.map((item, index) => (
              <View
                style={[
                  GlobalCSS.row,
                  GlobalCSS.padding.xsm,
                  GlobalCSS.padding.yxs,
                ]}>
                <FontAwesome
                  name="check-square-o"
                  size={25}
                  style={{paddingRight: 10}}
                  color={theme.colors.primary}
                />
                <H3>{item.title}</H3>
              </View>
            ))}
          </View>
        </View>
        <View style={{paddingBottom: 100}} />
      </ScrollView>
    </DarkBg>
  );
};

export default RecipeNutrition;

const styles = StyleSheet.create({
  imgContainer: {
    height: 200,
  },
});
