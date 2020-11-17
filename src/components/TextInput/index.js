import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {color} from "../ThemeConfig";
import {Text} from "../";

const Input = (props) => {
	return (
		<View style={styles.container}>
			{props.text !== undefined &&
			<View style={{alignContent: 'center', flex:0.2, alignItems: 'center', justifyContent: 'center'}}>
				<Text>{props.text}</Text>
			</View>
			}
			<TextInput placeholderTextColor={color.primary} style={[styles.input,{paddingLeft:props.left?0:10}]} {...props} />
			{props.rightIcon !== undefined &&
			<View style={{alignContent: 'center', flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
				{props.rightIcon}
			</View>
			}
		</View>
	)

}
const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		flexDirection: 'row',
		backgroundColor: color.gray,
		borderColor: color.primary,
		borderRadius: 10,

	},
	input: {
		height: 50,
		paddingRight: 0,
		flex: 1,
		fontWeight: "600",
	}
})

export default Input;