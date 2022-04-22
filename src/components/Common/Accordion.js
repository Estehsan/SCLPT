import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  useColorScheme,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme';
import {H1} from '../basic';

export default function Accordian({title, description, onPress}) {
  const isDarkMode = useColorScheme() === 'dark';

  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(description);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  return (
    <View>
      <TouchableOpacity
        ref={this.accordian}
        style={[
          styles.row,
          {
            backgroundColor: !isDarkMode
              ? theme.colors.bg
              : theme.colors.accent,
          },
        ]}
        onPress={() => toggleExpand()}>
        <H1 color={isDarkMode ? theme.colors.bg : theme.colors.accent}>
          {title}
        </H1>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color={'grey'}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={styles.child}>
          <Text>{data}</Text>
          <Text>hailo</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    marginHorizontal: 20,
    paddingRight: 18,
    borderRadius: 20,
    alignItems: 'center',
  },
  parentHr: {
    height: 1,
    color: 'white',
    width: '100%',
  },
  child: {
    backgroundColor: 'grey',
    padding: 16,
    borderRadius: 20,
  },
});
