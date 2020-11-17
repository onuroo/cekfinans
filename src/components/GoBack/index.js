import React from 'react'
import {View,TouchableOpacity, StyleSheet} from 'react-native'
import {Text} from '../index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {color} from "../ThemeConfig";
import {navigationRef} from '../../config/navigator'
const GoBack = () => {
	return (
		<View>
			<TouchableOpacity style={styles.container} onPress={() => navigationRef.current.goBack()}>
				<Icon name="angle-left" size={30} color={color.white} />
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding:10,
	}
})

export default GoBack;