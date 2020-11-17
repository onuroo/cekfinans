import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fontSize,color} from "../ThemeConfig";

const TextConsumer = ({h1, h2, h3, h4, h5, h6, p,style, bold, medium,color, regular, white,center, black,...props}) => {
	return (
		<Text style={[
			h1 && styles.h1,
			h2 && styles.h2,
			h3 && styles.h3,
			h4 && styles.h4,
			h5 && styles.h5,
			h6 && styles.h6,
			p && styles.p,
			bold && styles.bold,
			medium && styles.medium,
			regular && styles.regular,
			white && styles.white,
			black && styles.black,
			center && styles.center,
			style && style,
			{color:color},
		]}
		      {...props}
		>

		</Text>
	)
}
const styles = StyleSheet.create({
	h1: {
		fontSize: fontSize.h1
	}, h2: {
		fontSize: fontSize.h2
	}, h3: {
		fontSize: fontSize.h3
	}, h4: {
		fontSize: fontSize.h4
	}, h5: {
		fontSize: fontSize.h5
	}, h6: {
		fontSize: fontSize.h6
	},
	white:{
		color:color.white,
	},
	black:{
		color:color.black,
	},
	bold:{
		fontFamily:'NunitoSans-Bold',
		fontWeight:'800',
	},
	medium:{
		fontFamily:'NunitoSans-SemiBold',
		fontWeight:'600',
	},
	regular:{
		fontFamily:'NunitoSans-Regular',
		fontWeight:'400',
	},
	center:{
		textAlign:'center',
	},
})
export default TextConsumer;