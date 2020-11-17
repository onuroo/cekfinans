import React, {useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { color} from '../ThemeConfig';
const {width: wWidth, height: hHeight} = Dimensions.get('window');

const ModalSelect = ({visible, children, setVisible, ratio}) => {
  const [height, setHeight] = useState(hHeight);
  const opacity = new Animated.Value(0);
  const bottom = opacity.interpolate({
    inputRange: [0, ratio],
    outputRange: [-height, 0],
  });

  let animation = (type = 'open', cb = () => {}) => {
    const toValue = type === 'open' ? ratio : 0;
    const duration = 350;
    Animated.timing(opacity, {
      toValue,
      duration,
      useNativeDriver: false,
    }).start(cb);
  };

  let onShow = () => {
    animation();
  };
  const getHeightView = (heightFull = hHeight, ratio = 0.5) => {
    const getRatio = ratio < 0.5 ? ratio : ratio > 1 ? 0.5 : ratio;
    return heightFull * getRatio;
  };
  return (
    <View>
      <Modal transparent onShow={onShow} visible={visible}>
        <View
          style={styles.container}
          onLayout={(event) => {
            let {height: heightFull} = event.nativeEvent.layout;
            setHeight(getHeightView(heightFull, ratio));
          }}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: color.primary,
              opacity: opacity,
            }}>
            <TouchableOpacity style={{flex: 1}} />
          </Animated.View>
          <Animated.View
            style={[
              styles.modal,
              {
                height: height,
                backgroundColor: color.white,
                bottom: bottom,
              },
            ]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    padding: 10,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
});
export default ModalSelect;
