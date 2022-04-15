import {StyleSheet, Text, View, useColorScheme, FlatList} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme';
import {DarkBg, GlobalCSS, HL} from '../../components/basic';
import {FullDivider, WeeklyProgramDayExercise} from '../../components/Home';

const Tab = createMaterialTopTabNavigator();

const data = [
  {
    title: 'Dumbel Bench',
    description: '4 sets of 6-8, 6-8, 8-10',
  },
  {
    title: 'Barbell incline bench ',
    description: '4 sets of 6-8, 6-8, 8-10',
  },
  {
    title: 'Barbell incline bench ',
    description: '4 sets of 6-8, 6-8, 8-10',
  },
  {
    title: 'Barbell incline bench ',
    description: '4 sets of 6-8, 6-8, 8-10',
  },
];

const ProgramScreen = ({route, navigation}) => {
  const {id, Duration} = route.params;
  const isDarkMode = useColorScheme() === 'light';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HL>Program {id}</HL>,
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
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Chest Day</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

const Tuesday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Leg Day</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

const Wednesday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Bicep Day</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

const Thursday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Tricep Day</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

const Friday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Chest Data</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

const Saturday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Chest Data</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

const Sunday = ({navigation}) => {
  return (
    <DarkBg style={styles.container}>
      <FullDivider style={{opacity: 0.5}} />
      <View style={[GlobalCSS.flex, GlobalCSS.padding.xmd]}>
        <FlatList
          ListHeaderComponent={() => <HL>Chest Data</HL>}
          ListHeaderComponentStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => (
            <FullDivider style={{opacity: 0.2, marginVertical: 15}} />
          )}
          data={data}
          renderItem={({item}) => (
            <WeeklyProgramDayExercise item={item} navigation={navigation} />
          )}
        />
      </View>
    </DarkBg>
  );
};

export default ProgramScreen;

const styles = StyleSheet.create({});
