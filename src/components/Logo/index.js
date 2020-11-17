import React from 'react'
import {Image, StyleSheet} from 'react-native'

const Logo = () => {
	return (
		<Image style={styles.stretch} source={require('./../../assets/logo.png')}/>
	)

}
const styles = StyleSheet.create({
	stretch: {
		width: 200,
		height: 200,
		resizeMode: 'stretch'
	}
})

export default Logo;