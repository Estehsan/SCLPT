import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Paragraph, Title} from 'react-native-paper';

const TextInputField = ({placeholder, title}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Paragraph
        style={{color: 'white', paddingHorizontal: 10, paddingVertical: 5}}>
        {title}
      </Paragraph>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        TextInput={{
          color: 'red',
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
  },
  input: {
    width: '100%',
    borderRadius: 20,

    borderColor: '#888',
    color: 'white',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
