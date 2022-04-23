import React, {useState, useRef} from 'react';
import {
  View,
  ImageBackground,
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
import {GlobalCSS, GreenBtn, H1} from '../basic';
import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {WhiteRoundBtn} from '../Common';

export default function Accordian({title, description, onPress}) {
  const isDarkMode = useColorScheme() === 'dark';

  const [Sets, setSets] = useState();
  const [Reps, setReps] = useState();

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const [text, setText] = React.useState(title);

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
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: expanded ? 0 : 20,
            borderBottomRightRadius: expanded ? 0 : 20,
          },
        ]}
        onPress={() => toggleExpand()}>
        {!expanded ? (
          <H1 color={isDarkMode ? theme.colors.bg : theme.colors.accent}>
            {text}
          </H1>
        ) : (
          <TextInput
            value={text}
            mode="outlined"
            placeholder="Enter your text here"
            selectionColor={isDarkMode ? theme.colors.bg : theme.colors.accent}
            placeholderTextColor={
              isDarkMode ? theme.colors.bg : theme.colors.accent
            }
            theme={{
              colors: {
                primary: theme.colors.primary,
                text: isDarkMode ? theme.colors.bg : theme.colors.accent,
              },
            }}
            style={{
              backgroundColor: 'transparent',
              width: '90%',
            }}
            onChangeText={text => setText(text)}
          />
        )}
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color={'grey'}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View
          style={[
            styles.child,

            {
              backgroundColor: !isDarkMode
                ? theme.colors.bg
                : theme.colors.accent,
            },
          ]}>
          <ImageBackground
            source={require('../../assets/images/trybg.png')}
            resizeMode="contain"
            style={[GlobalCSS.row]}>
            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.justifyCenter,
                GlobalCSS.alignItemsCenter,
              ]}>
              <Picker
                style={{width: 100, backgroundColor: 'transparent'}}
                selectedValue={Sets}
                color={isDarkMode ? theme.colors.bg : theme.colors.accent}
                mode="dialog"
                onValueChange={(itemValue, itemIndex) => setSets(itemValue)}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
              <H1 color={isDarkMode ? theme.colors.bg : theme.colors.accent}>
                Sets
              </H1>
            </View>
            <View style={[GlobalCSS.alignItemsCenter, GlobalCSS.justifyCenter]}>
              <WhiteRoundBtn size={50}>
                <Entypo
                  name="cross"
                  size={25}
                  color={
                    !isDarkMode ? theme.colors.header : theme.colors.accent
                  }
                />
              </WhiteRoundBtn>
            </View>

            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.justifyCenter,
                GlobalCSS.alignItemsCenter,
              ]}>
              <Picker
                style={{width: 100}}
                selectedValue={Reps}
                mode="dialog"
                onValueChange={(itemValue, itemIndex) => setReps(itemValue)}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
              <H1 color={isDarkMode ? theme.colors.bg : theme.colors.accent}>
                REPS
              </H1>
            </View>
          </ImageBackground>
          <GreenBtn
            title="ADD SET"
            LeftIcon="true"
            onPress={() => navigation.navigate('')}>
            <Entypo name="plus" size={20} color={'#fff'} />
          </GreenBtn>
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
    height: 80,
    width: '90%',
    paddingLeft: 25,
    marginHorizontal: 20,
    paddingRight: 18,

    alignItems: 'center',
  },
  parentHr: {
    width: '100%',
  },
  child: {
    padding: 16,
    marginHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
