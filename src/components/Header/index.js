import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text} from "../";
import {color} from "../ThemeConfig";
import LogoYatay from '../Logo/logo-yatay'
const Header = ({left,title,description,center,right}) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				{left && left}
			</View>
			<View style={styles.center}>
				{center ? <LogoYatay /> :title && <View>
					{title && <Text center color={color.white} h6>{title}</Text>}
					{description && <Text center color={color.white} p>{description}</Text>}
				</View>}
			</View>
			<View style={styles.right}>
				{right && right}
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		backgroundColor:color.gradientStart,
		height:60,
		alignItems:'center',
		borderBottomWidth:1,
		borderColor:color.white
	},
	flex:{
		flex:1,
	},
	left:{
		flex:0.2,
	},
	center:{
		flex:0.6,
		alignItems:'center'
	},
	right:{
		flex:0.2,
	}
})
export default Header;