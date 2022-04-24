import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Divider, Modal} from 'react-native-paper';

import React, {useState} from 'react';
import {
  DarkBg,
  GlobalCSS,
  H1,
  H2,
  Heading,
  HL,
  P,
} from '../../../components/basic';
import {theme} from '../../../theme';
import {Paragraph, Title} from 'react-native-paper';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Entypo from 'react-native-vector-icons/Entypo';
import {LineChart} from 'react-native-chart-kit';
import HorizontalWeeklyButtons from '../../../components/Home/HorizontalWeeklyButtons';
import DividerSVG from '../../../assets/images/DividerSVG';
import {Picker} from '@react-native-picker/picker';

const data = {
  labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],

  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => '#2980b9', // optional
      strokeWidth: 2, // optional
    },

    {
      data: [80, 78, 78, 53, 56, 53, 40],
      opacity: 100,
      color: (opacity = 1) => '#FC6050', // optional

      strokeWidth: 2, // optional
    },
  ],
};

const chartConfig = {
  labelColor: (opacity = 1) => theme.colors.grey,
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,

  fillShadowGradientTo: '#AF2667',
  fillShadowGradientFrom: '#FC6050',

  fillShadowGradientFromOpacity: 1,
  fillShadowGradientToOpacity: 0.2,

  useShadowColorFromDataset: true, // optional
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

  strokeWidth: 0, // optional, default 3
  barPercentage: 1,

  decimalPlaces: 2, // optional, defaults to 2dp
};

const ProgressTab = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const ref = React.useRef(null);
  const [index, setIndex] = useState(1);

  const [Sets, setSets] = useState();
  const [Reps, setReps] = useState();

  const pickerRef = React.useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <DarkBg>
      <ScrollView>
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ylg]}>
          <View
            style={[
              GlobalCSS.row,
              GlobalCSS.justifyBetween,
              GlobalCSS.alignItemsCenter,
            ]}>
            <Heading>Progress</Heading>
            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.alignItemsCenter,
                GlobalCSS.padding.ylg,
              ]}>
              <Text
                style={{
                  color: isDarkMode ? theme.colors.accent : theme.colors.bg,
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: '700',
                  lineHeight: 24,
                  letterSpacing: 1,
                  fontSize: 10,
                }}>
                Filter By
              </Text>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={[
                  styles.Filter,
                  {
                    backgroundColor: isDarkMode
                      ? theme.colors.header
                      : theme.colors.accent,
                  },
                ]}>
                <P>WEEK</P>
                <Entypo
                  name="chevron-down"
                  size={16}
                  color={isDarkMode ? theme.colors.accent : theme.colors.bg}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Calories Tracker Start */}
          <View
            style={[
              GlobalCSS.fullWidth,
              GlobalCSS.padding.ylg,
              GlobalCSS.round.md,
              GlobalCSS.padding.xsm,
              GlobalCSS.margin.ylg,

              {
                backgroundColor: isDarkMode
                  ? theme.colors.header
                  : theme.colors.accent,

                ...theme.customShadow,
              },
            ]}>
            <H2>PROGRESS TRACKER</H2>

            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.padding.ymd,
                GlobalCSS.margin.xsm,
              ]}>
              <LineChart
                verticalLabelRotation={0}
                data={data}
                width={Dimensions.get('window').width - 30} // from react-native
                height={256}
                withVerticalLines={true}
                withHorizontalLines={false}
                withDots={false}
                withHorizontalLabels={true}
                chartConfig={chartConfig}
                bezier
              />
            </View>
          </View>
          {/* Calories Tracker End */}
          {/* Progress Tracker Start*/}
          <View
            style={[
              GlobalCSS.fullWidth,
              GlobalCSS.padding.ymd,
              GlobalCSS.round.md,
              GlobalCSS.padding.xsm,
              {
                backgroundColor: isDarkMode
                  ? theme.colors.header
                  : theme.colors.accent,

                ...theme.customShadow,
              },
            ]}>
            <H2>PROGRESS TRACKER</H2>

            <View
              style={[
                GlobalCSS.row,
                GlobalCSS.justifyBetween,
                GlobalCSS.padding.xmd,
                GlobalCSS.padding.ymd,
              ]}>
              <View style={styles.left}>
                <AnimatedCircularProgress
                  size={180}
                  width={7}
                  backgroundWidth={4}
                  fill={77}
                  tintColor={theme.colors.primary}
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="#3d5875">
                  {fill => (
                    <>
                      <Heading style={styles.title}>{fill}%</Heading>
                      <H1 style={styles.title}>Program 01</H1>
                    </>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View
                style={[GlobalCSS.alignItemsCenter, GlobalCSS.justifyCenter]}>
                <AnimatedCircularProgress
                  size={80}
                  width={7}
                  fill={22}
                  backgroundWidth={4}
                  tintColor="#9b59b6"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="#3d5875">
                  {fill => (
                    <>
                      <P style={styles.title}>{fill}%</P>
                    </>
                  )}
                </AnimatedCircularProgress>
                <H2>Goals</H2>

                <AnimatedCircularProgress
                  size={80}
                  width={7}
                  backgroundWidth={4}
                  fill={55}
                  tintColor="#e74c3c"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="#3d5875">
                  {fill => (
                    <>
                      <P style={styles.title}>{fill}%</P>
                    </>
                  )}
                </AnimatedCircularProgress>
                <H2>Weights</H2>
              </View>
            </View>
          </View>
          {/* Progress tracked End */}
        </View>
        <View style={{paddingBottom: 100}} />
      </ScrollView>
      <Modal
        visible={visible}
        presentationStyle="overFullScrexren"
        onDismiss={hideModal}
        initialScrollIndex={index}
        ref={ref}
        contentContainerStyle={styles.containerStyle}>
        <View>
          <FlatList
            horizontal
            initialScrollIndex={index}
            ref={ref}
            data={[
              {
                Day: 'Monday',
              },
              {
                Day: 'Tuesday',
              },
              {
                Day: 'Wednesday',
              },
              {
                Day: 'Thursday',
              },
              {
                Day: 'Friday',
              },
              {
                Day: 'Saturday',
              },
              {
                Day: 'Sunday',
              },
            ]}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index: windex}) => (
              <HorizontalWeeklyButtons
                item={item}
                index={index}
                ref={ref}
                windex={windex}
                onPress={() => {
                  setIndex(windex);
                }}
              />
            )}
          />
        </View>
        <View style={{height: 20}}>
          <DividerSVG />
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
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />

            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
          </Picker>
          <H1 color={'black'}>Date</H1>
        </View>
      </Modal>
    </DarkBg>
  );
};

export default ProgressTab;

const styles = StyleSheet.create({
  objectView: {
    width: '100%',
  },
  Filter: {
    paddingHorizontal: 20,
    marginLeft: 20,
    alignContent: 'center',
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: 'row',
    display: 'flex',

    ...theme.customShadow,
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    height: 300,
  },
});
