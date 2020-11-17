import React from 'react';
import {View,StyleSheet} from 'react-native';
import {color} from "../ThemeConfig";
import {Icon} from "../index";
const CheckBox = ({value}) => {
	return (
		<View style={[styles.Box,{borderColor:value ?color.gradientEnd:color.white,
			backgroundColor:value ? color.gradientEnd:color.gradientStart}]}>
			{value && <Icon name={'check'} color={color.white} size={20}/>}
		</View>
	)
}

const styles = StyleSheet.create({
	Box:{
		width:20,
		height:20,
		borderWidth:2,
		alignItems:'center',
		justifyContent:'center'
	}
})

export default CheckBox;