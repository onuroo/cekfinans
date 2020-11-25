import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import Text from "./Text";
import NavigationActions from '../navigation/navigationActions';

const LoadingModal = ({ navigation, route }) => {
    return (
        <View style={ styles.modalContainer }>
           <ActivityIndicator size="large" color="#FFF" />
        </View>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoadingModal;