import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DarkBg, GlobalCSS} from '../../components/basic';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.76866153532613, longitude: -122.45178976090119};
const destination = {
  latitude: 37.76209885035194,
  longitude: -122.44689299885329,
};

const mapsStyles = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [
      {
        color: '#202c3e',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        gamma: 0.01,
      },
      {
        lightness: 20,
      },
      {
        weight: '1.39',
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        weight: '0.96',
      },
      {
        saturation: '9',
      },
      {
        visibility: 'on',
      },
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 30,
      },
      {
        saturation: '9',
      },
      {
        color: '#29446b',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        saturation: 20,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 20,
      },
      {
        saturation: -20,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 10,
      },
      {
        saturation: -30,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#193a55',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        saturation: 25,
      },
      {
        lightness: 25,
      },
      {
        weight: '0.01',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        lightness: -20,
      },
    ],
  },
];
const Map = () => {
  return (
    <DarkBg>
      <MapView
        style={[GlobalCSS.flex]}
        customMapStyle={mapsStyles}
        provider={MapView.PROVIDER_GOOGLE}
        apikey={'AIzaSyDkyRE-71C03X0sA_APDhZijqa3FPdYy9M'}
        initialRegion={{
          latitude: 37.76866153532613,
          longitude: -122.45178976090119,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </DarkBg>
  );
};

export default Map;

const styles = StyleSheet.create({});
