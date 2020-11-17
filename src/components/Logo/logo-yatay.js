import React from 'react'
import {Image, StyleSheet} from 'react-native'

const LogoYatay = () => {
	return (
		<Image style={styles.stretch} source={require('./../../assets/yatay-logo.png')}/>
	)

}
const styles = StyleSheet.create({
	stretch: {
		width: 150,
		resizeMode: 'contain'
	}
})

export default LogoYatay;