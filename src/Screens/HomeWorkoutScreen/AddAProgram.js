import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS, Heading} from '../../components/basic';
import {List} from 'react-native-paper';
import {theme} from '../../theme';
import {Accordian} from '../../components/Common';

const AddAProgram = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const THEME_COLOR = {
    color: isDarkMode ? theme.colors.bg : theme.colors.accent,
  };

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <DarkBg>
      <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ysm]}>
        <Heading>ADD A PROGRAM</Heading>
      </View>
      <Accordian title={'TITLE'} description={'WOW YOU ARE GOING BRO'} />
    </DarkBg>
  );
};

export default AddAProgram;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 20,
  },
  Accordion: {
    borderRadius: 20,
    ...theme.customShadow,
  },
});
