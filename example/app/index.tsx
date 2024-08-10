import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { ImageMagnifier } from '../../src/index';

import { defaultBase64 as initialDefaultBase64 } from './examples/base64';

const App = () => {
  const [base64, setBase64] = useState(defaultBase64);
  const [useBase64, setUseBase64] = useState(false);
  const [defaultBase64] = useState(initialDefaultBase64);
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('100%');
  const [resizeMode, setResizeMode] = useState('cover');

  const widthOptions = [
    { label: '100%', value: '100%' },
    { label: '300', value: 300 },
    { label: '200', value: 200 },
    { label: '100', value: 100 },
  ];

  const heightOptions = [
    { label: '100%', value: '100%' },
    { label: '300', value: 300 },
    { label: '200', value: 200 },
    { label: '100', value: 100 },
  ];

  const resizeModeOptions = [
    { label: 'Cover', value: 'cover' },
    { label: 'Contain', value: 'contain' },
    { label: 'Stretch', value: 'stretch' },
    { label: 'Repeat', value: 'repeat' },
    { label: 'Center', value: 'center' },
  ];

  const handleUseBase64Toggle = () => {
    setUseBase64(!useBase64);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Input:{' '}
            {useBase64 ? 'Base64 string' : "File URI: 'examples/example.jpg'"}
          </Text>
          <TextInput
            style={[
              styles.textInput,
              useBase64 === false ? { backgroundColor: 'grey' } : {},
            ]}
            placeholder={`Base64 string: ${defaultBase64}`}
            value={base64}
            onChangeText={setBase64}
            editable={useBase64 === true}
          />
          <Button
            title={useBase64 ? 'Use file URI' : 'Use Base64 Input'}
            onPress={handleUseBase64Toggle}
          />
        </View>
        <View style={styles.radioContainer}>
          <View style={styles.radioColumn}>
            <Text style={styles.label}>Select Width:</Text>
            <RadioForm
              radio_props={widthOptions}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              onPress={(value) => setWidth(value)}
            />
          </View>
          <View style={styles.radioColumn}>
            <Text style={styles.label}>Select Height:</Text>
            <RadioForm
              radio_props={heightOptions}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              onPress={(value) => setHeight(value)}
            />
          </View>
          <View style={styles.radioColumn}>
            <Text style={styles.label}>Resize Mode:</Text>
            <RadioForm
              radio_props={resizeModeOptions}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              onPress={(value) => setResizeMode(value)}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <ImageMagnifier
            source={
              useBase64
                ? { uri: `data:image/png;base64,${base64 || defaultBase64}` }
                : require('./examples/example.jpg')
            }
            width={width}
            height={height}
            resizeMode={resizeMode}
            iconLocation="bottom-left"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.8,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  radioColumn: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default App;
