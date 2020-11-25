import React from 'react';
import {
	Platform,
	SafeAreaView,
	StatusBar,
	View
} from 'react-native';
import {color} from "./ThemeConfig";

const ThemeProvider = ({children}) => {
	return (
		<>
			<StatusBar barStyle="light-content"/>
			<View style={{flex: 1, paddingTop:Platform.OS == 'ios' ? 30:0, backgroundColor: color.gradientStart}}>
				{children}
			</View>
		</>
	);
};
export default ThemeProvider;