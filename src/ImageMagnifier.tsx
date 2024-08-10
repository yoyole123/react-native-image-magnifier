import {
  View,
  Image,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  StyleSheet,
  type ImageSourcePropType,
  type DimensionValue,
} from 'react-native';
import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface ImageMagnifierProps {
  imageContainerStyle?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  iconLocation?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  width?: DimensionValue;
  height?: DimensionValue;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const getPositionStyle = (location?: string) => {
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
  width = '100%',
  height = '100%',
  resizeMode = 'cover',
}) => {
  const [imageZoom, setImageZoom] = useState<boolean>(false);

  return (
    <View
      style={[styles.componenetContainer, { width: width, height: height }]}
    >
      <ImageModal
        source={source}
        isVisible={imageZoom}
        dismissModalMethod={() => setImageZoom(false)}
      />
      <TouchableOpacity
        style={[
          styles.touchableOpacityContainer,
          imageContainerStyle,
          { width: width, height: height },
        ]}
        onPress={() => setImageZoom(!imageZoom)}
      >
        <Image
          source={source}
          style={[
            styles.mainImage,
            { width: width, height: height, resizeMode: resizeMode },
          ]}
        />
        <View
          style={[styles.zoomIconContainer, getPositionStyle(iconLocation)]}
        >
          <Image
            source={require('./magnification.png')}
            style={styles.zoomIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  componenetContainer: { flex: 1, width: '100%', height: '100%' },
  zoomIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  zoomIconContainer: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  mainImage: {
    borderColor: 'black',
    borderWidth: 2,
  },
  touchableOpacityContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
export default ImageMagnifier;
