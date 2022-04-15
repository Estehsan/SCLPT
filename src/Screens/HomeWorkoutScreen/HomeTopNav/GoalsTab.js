import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  useColorScheme,
  FlatList,
  SectionList,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {DarkBg, GlobalCSS, Heading} from '../../../components/basic';
import FullDivider from '../../../components/Home/FullDivider';
import PlusGreenBtn from '../../../components/Common/PlusGreenBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import ListofGoals from '../../../components/Home/ListofGoals';

const ALLDATA = [
  {
    mainTitle: 'Goals',
    bg: true,

    data: [
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
      },
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
      },
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
      },
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
      },
    ],
  },
  {
    mainTitle: 'Completed',
    data: [
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
        done: true,
      },
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
        done: true,
      },
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
        done: true,
      },
      {
        title: 'GAIN EXTRA 5KG',
        current: 'Currently at 76KG',
        done: true,
      },
    ],
  },
];

const GoalsTab = () => {
  const window = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'light';

  return (
    <DarkBg>
      {/* Header Start  */}

      {/* Header End  */}

      {/* Goals Start */}

      <SectionList
        sections={ALLDATA}
        ItemSeparatorComponent={() => (
          <View style={{opacity: 0.2}}>
            <FullDivider />
          </View>
        )}
        renderItem={({item, section}) => (
          <View
            style={[
              section.bg
                ? !isDarkMode
                  ? {backgroundColor: '#232226'}
                  : null
                : null,
              styles.lightbg,
            ]}>
            <ListofGoals
              done={item.done}
              title={item.title}
              current={item.current}
            />
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View
            style={[
              GlobalCSS.padding.ylg,
              GlobalCSS.row,
              GlobalCSS.justifyBetween,
              GlobalCSS.padding.xmd,
            ]}>
            <Heading>{section.mainTitle}</Heading>
            {section.bg ? (
              <PlusGreenBtn onPress={() => {}}>
                <Entypo name="plus" size={28} color="white" />
              </PlusGreenBtn>
            ) : null}
          </View>
        )}
      />
      <View style={{paddingBottom: 100}} />
    </DarkBg>
  );
};

export default GoalsTab;

const styles = StyleSheet.create({
  lightbg: {
    width: window.width,
    opacity: 0.9,
    paddingVertical: 30,
  },
});
