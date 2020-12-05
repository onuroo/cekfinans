import React from 'react'
import {View,TouchableOpacity, StyleSheet} from 'react-native'
import {Text} from '../index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {color} from "../ThemeConfig";
import NavigationActions from '../../navigation/navigationActions';
const GoBack = () => {
	const { navigatePop } = NavigationActions();
	return (
		<View>
			<TouchableOpacity style={styles.container} onPress={ () => navigatePop() }>
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