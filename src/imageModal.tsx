import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  BackHandler,
  Dimensions,
  StyleSheet,
  type ImageSourcePropType,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface ImageModalProps {
  source: ImageSourcePropType; // This allows either an object or a string
  isVisible: boolean;
  dismissModalMethod: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  source,
  isVisible,
  dismissModalMethod,
}) => {
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);

  useEffect(() => {
    const backAction = () => {
      if (isVisible) {
        dismissModalMethod();
        return true; // Signal that back button press is handled
      }
      return false; // Signal that back button press is not handled
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [isVisible, dismissModalMethod]);

  // Measure the image dimensions when it's loaded
  const onImageLoad = ({ nativeEvent }: { nativeEvent: any }) => {
    const { width, height } = nativeEvent.source;
    const windowWidth = Dimensions.get('window').width * 0.9; // Adjust as needed
    const aspectRatio = windowWidth / width;
    setImageHeight(height * aspectRatio);
    setImageWidth(windowWidth);
  };

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={dismissModalMethod} // Handle backdrop press to dismiss modal
      onBackButtonPress={dismissModalMethod} // Handle back button press to dismiss modal
      avoidKeyboard
      backdropOpacity={0.5}
      animationIn="fadeIn"
      style={styles.modalElement} // Remove default margin to fit content better
    >
      <View style={styles.contentView}>
        <Image
          source={source}
          resizeMode="contain"
          style={[
            styles.imageElement,
            { width: imageWidth, height: imageHeight },
          ]} // Set maxHeight dynamically
          onLoad={onImageLoad} // Measure image dimensions when it's loaded
        />
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modalElement: { margin: 0 },
  contentView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageElement: { maxHeight: '90%' },
});

export default ImageModal;
