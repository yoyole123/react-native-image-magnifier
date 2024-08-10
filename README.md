# react-native-image-magnifier

`react-native-image-magnifier` is a customizable image magnification component for React Native. It allows users to zoom in on images and view them in full screen for greater details, making it ideal for applications that require detailed image previews or visual inspection.

## Installation

To install `react-native-image-magnifier`, you can use npm or yarn:

```bash
npm install react-native-image-magnifier
```
or

```bash
yarn add react-native-image-magnifier
```
## Trying demo app
![Example Usage](https://github.com/yoyole123/react-native-image-magnifier/blob/master/demo/demo.gif)
To test the demo app yourself, run the following commands: 
1. clone this repo
```shell
git clone https://github.com/yoyole123/react-native-image-magnifier.git
```

2. Install dependencies
```shell
cd <cloned_repo_path>/example
yarn install
```
or using NPM
```shell
cd <cloned_repo_path>/example
npm install
```

3. Run app
This app was built and tested using Expo, so run it in the method best suited for you, but for example, here is how to run it using Expo:
(Note: for some reason, installing expo worked for me using NPM only)
```shell
npx expo start
```

## Usage
Here’s a basic example of how to use the ImageMagnifier component in your React Native application:

### Using with image file
```tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ImageMagnifier from 'react-native-image-magnifier';

const ExampleScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageMagnifier
        source={require('./path/to/your/image.jpg')}
        resizeMode="contain"
        iconLoaction="bottom-right"
        imageContainerStyle={{ backgroundColor: "blue" }}
      />
    </View>
  );
};
```

### Using with Base64 string 
```tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ImageMagnifier from 'react-native-image-magnifier';

const ExampleScreen = () => {
  const [base64String, setBase64String] = useState("<you base64 string here>");

  return (
    <View style={{ flex: 1 }}>
      <ImageMagnifier
        source={base64String}
        resizeMode="contain"
        iconLoaction="bottom-right"
        imageContainerStyle={{ backgroundColor: "blue" }}
      />
    </View>
  );
};

export default ExampleScreen;
```

## Props
The ImageMagnifier component accepts the following props:

| Prop                | Description                 | Type                 | Accepted Values | Defalt Value  |
| -------------       | -------------        | -------------        | -------------   | ------------- |
| source              | The image that should become magnifiable  | ImageSourcePropType  | -               |
| width               | Width of minimized image       | DimensionValue       | -               | 100%
| height              | Height of minimized image       | DimensionValue       | -               | 100%
| resizeMode          | Value for CSS attribute "resizeMode" for minimized image               | String               | ['cover', 'contain', 'stretch, 'repeat', 'center'] | 'cover'
| iconLocation        | Where the magnifying glass icon should be placed in the minimized image              | String               | [ 'top-right', 'top-left', 'bottom-right', 'bottom-left' ] | 'bottom-right'
| imageContainerStyle | Additional styles for the container for the minimized image            | StyleProp            | - | {}

## License
This project is licensed under the MIT License. See the LICENSE file for details.
