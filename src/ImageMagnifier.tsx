import {
  View,
  Image,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  StyleSheet,
  type ImageSourcePropType,
} from 'react-native';
import React, { useState } from 'react';
import { wp } from './constants';
import ImageModal from './ImageModal';

interface ImageMagnifierProps {
  imageContainerStyle?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  iconLocation?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const getPositionStyle = (location: string) => {
  switch (location) {
    case 'top-right':
      return { top: 20, right: 20 };
    case 'top-left':
      return { top: 20, left: 20 };
    case 'bottom-right':
      return { bottom: 20, right: 20 };
    case 'bottom-left':
      return { bottom: 20, left: 20 };
    default:
      return { bottom: 20, right: 20 }; // Default to bottom-right if location is not provided
  }
};

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  imageContainerStyle = {},
  source,
  iconLocation,
}) => {
  const [imageZoom, setImageZoom] = useState<boolean>(false);

  const iconStyle = iconLocation
    ? getPositionStyle(iconLocation)
    : getPositionStyle('bottom-right');

  return (
    <View>
      <ImageModal
        source={source}
        isVisible={imageZoom}
        dismissModalMethod={() => setImageZoom(false)}
      />
      <TouchableOpacity
        style={[styles.touchableOpacityContainer, imageContainerStyle]}
        onPress={() => setImageZoom(!imageZoom)}
      >
        <Image source={source} style={[{ width: 250, height: 250 }]} />
        <View style={[styles.imageContainer, iconStyle]}>
          <Image source={require('./magnification.png')} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 40,
    height: 40,
    position: 'absolute',
    // ...getPositionStyle(iconLocation), // Apply dynamic position based on iconLocation
  },
  touchableOpacityContainer: {
    position: 'relative',
    alignItems: 'center',
    marginVertical: wp(3),
    borderColor: 'black',
    borderWidth: 2,
    width: 255,
  },
});
export default ImageMagnifier;
