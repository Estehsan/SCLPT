import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import {SettingList} from '../../components/More';
import {FullDivider} from '../../components/Home';

const ALLDATA = [
  {title: 'GAIN EXTRA 5KG', status: 'DISABLE'},
  {
    title: 'GAIN EXTRA 5KG',
    status: 'ENABLE',
  },
  {
    title: 'GAIN EXTRA 5KG',
    status: 'DISABLE',
  },
  {
    title: 'GAIN EXTRA 5KG',
    status: 'DISABLE',
  },
];
const Setting = () => {
  return (
    <DarkBg>
      <View
        style={[GlobalCSS.padding.xmd, GlobalCSS.flex, GlobalCSS.padding.ymd]}>
        <View style={[GlobalCSS.padding.ysm]}>
          <Heading>SETTING</Heading>
        </View>

        <FlatList
          data={ALLDATA}
          ItemSeparatorComponent={() => (
            <View style={[GlobalCSS.padding.ysm]}>
              <FullDivider style={{opacity: 0.2}} />
            </View>
          )}
          renderItem={({item}) => <SettingList item={item} />}
        />
      </View>
    </DarkBg>
  );
};

export default Setting;

const styles = StyleSheet.create({});
