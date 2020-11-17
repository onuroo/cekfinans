import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {Text} from '../index';
import {color} from "../ThemeConfig";

const Button = ({variant = 'primary', title, onPress, color}, props) => {
	const type = variant === 'primary' ? 'primary' : variant === 'link' ? 'link' : 'danger'
	return (
		<View>
			<TouchableOpacity style={[styles.btn, styles[type]]} {...props} onPress={onPress}>
				<Text  color={color} style={{fontSize:13,fontWeight:'800'}} white center>{title}</Text>
			</TouchableOpacity>
		</View>
	)

}
const styles = StyleSheet.create({
	container: {},
	btn: {
		height: 40,
		textAlign: 'center',
		justifyContent: 'center', alignItems: 'center',
		borderRadius: 10,
	},
	primary: {
		backgroundColor: color.theme,
	},
	danger: {
		backgroundColor: color.danger,
	}
})

export default Button;