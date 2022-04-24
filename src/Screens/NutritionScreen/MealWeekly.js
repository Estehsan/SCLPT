import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  Dimensions,
  ScrollView,
  SectionList,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme';
import {DarkBg, GlobalCSS, H2, Heading, HL} from '../../components/basic';
import {FullDivider, WeeklyProgramDayExercise} from '../../components/Home';
import HorizontalListOfMeals from '../../components/Nutrition/HorizontalListOfMeals';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const data = [
  {
    title: 'Beef Steak',
    protein: '20g',
    carbs: '4g',
    fat: '32g',
    quantity: '250 gm',
    fill: 30,
  },
  {
    title: 'Burger ',
    protein: '20g',
    carbs: '320g',
    fat: '10g',
    quantity: '250 gm',
    fill: 80,
  },
  {
    title: 'Sandwich ',
    protein: '20g',
    carbs: '320g',
    fat: '10g',
    quantity: '250 gm',
    fill: 20,
  },
  {
    title: 'Pizza ',
    protein: '20g',
    carbs: '320g',
    fat: '10g',
    quantity: '250 gm',
    fill: 20,
  },
];

const MealWeekly = ({route, navigation}) => {
  const {id, Duration} = route.params;
  const isDarkMode = useColorScheme() === 'light';

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarScrollEnabled: true,
      headerTitle: () => <HL>PROGRAM {id}</HL>,
      headerRight: () => (
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="pencil"
            size={28}
            color={isDarkMode ? theme.colors.bg : theme.colors.accent}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: isDarkMode ? theme.colors.accent : theme.colors.header,
      },
      headerTintColor: isDarkMode ? theme.colors.bg : theme.colors.accent,
    });
  }, [isDarkMode, id, Duration, navigation]);
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        headerShadowVisible: false,
        swipeEnabled: false,

        tabBarLabelStyle: {
          fontSize: 40,
          fontFamily: 'BebasNeue-Regular',
          fontWeight: '100',
          height: 50,
        },

        tabBarStyle: {
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },

        tabBarScrollEnabled: true,

        tabBarIndicatorContainerStyle: {
          backgroundColor: !isDarkMode ? theme.colors.bg : theme.colors.lightbg,
        },
        tabBarActiveTintColor: isDarkMode
          ? theme.colors.bg
          : theme.colors.accent,

        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.accent,
          height: 0,
        },

        tabBarInactiveTintColor: isDarkMode ? '#22222240' : '#ffffff40',
      }}>
      <Tab.Screen name="Monday" component={Monday} />
      <Tab.Screen name="Tuesday" component={Tuesday} />
      <Tab.Screen name="Wednesday" component={Wednesday} />
      <Tab.Screen name="Thursday" component={Thursday} />
      <Tab.Screen name="Friday" component={Friday} />
      <Tab.Screen name="Saturday" component={Saturday} />
      <Tab.Screen name="Sunday" component={Sunday} />
    </Tab.Navigator>
  );
};

const Monday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <ScrollView>
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>

        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 20,
                }}
              />
            );
          }}
        />
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>
        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 20,
                }}
              />
            );
          }}
        />
        <View style={{paddingBottom: 100}} />
      </ScrollView>
    </DarkBg>
  );
};

const Tuesday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <ScrollView>
        <FullDivider style={{opacity: 0.5}} />

        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>

        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 20,
                }}
              />
            );
          }}
        />
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>
        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 5,
                }}
              />
            );
          }}
        />

        <View style={{paddingBottom: 100}} />
      </ScrollView>
    </DarkBg>
  );
};

const Wednesday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <ScrollView>
        <FullDivider style={{opacity: 0.5}} />

        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>

        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 5,
                }}
              />
            );
          }}
        />
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>
        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 5,
                }}
              />
            );
          }}
        />
      </ScrollView>
    </DarkBg>
  );
};

const Thursday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <ScrollView>
        <FullDivider style={{opacity: 0.5}} />

        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>

        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 5,
                }}
              />
            );
          }}
        />
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd]}>
          <H2>MEAL 1</H2>
        </View>
        <FlatList
          data={data}
          snapToAlignment={'start'}
          horizontal
          snapToInterval={Dimensions.get('window').width - 160}
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          renderItem={({item}) => (
            <HorizontalListOfMeals
              onPress={() => navigation.navigate('RecipeNutrition')}
              item={item}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 5,
                }}
              />
            );
          }}
        />
      </ScrollView>
    </DarkBg>
  );
};

const Friday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
    </DarkBg>
  );
};

const Saturday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
    </DarkBg>
  );
};

const Sunday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
    </DarkBg>
  );
};

export default MealWeekly;

const styles = StyleSheet.create({});
