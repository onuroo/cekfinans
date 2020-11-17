import React from 'react'
import {View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native'
import {Text, Button,GoBack, Header, Logo, Input} from './../../components'
import {color} from "../../components/ThemeConfig";

const Register = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Header left={<GoBack navigation={navigation} />} center={<Text h4 bold center color={color.white} white> Kayıt Ol</Text>}/>

			<View style={styles.content}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.keyboardArea}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<View style={styles.justifyContent}>
								<Input onChangeText={(val) => console.log(val)}
								       autoCapitalize={'none'}
								       autoCompleteType={'off'}
								       placeholder={'Ad Soyad'}
								/>
								<Input onChangeText={(val) => console.log(val)}
								       autoCapitalize={'none'}
								       autoCompleteType={'off'}
								       placeholder={'Telefon'}
								/>
								<Input onChangeText={(val) => console.log(val)}
								       autoCapitalize={'none'}
								       autoCompleteType={'off'}
								       placeholder={'Email'}
								/>
								<Input onChangeText={(val) => console.log(val)}
								       autoCapitalize={'none'}
								       autoCompleteType={'off'}
								       placeholder={'Şifre'}
								/>
								<Input onChangeText={(val) => console.log(val)}
								       autoCapitalize={'none'}
								       autoCompleteType={'off'}
								       placeholder={'Şifre Tekrar'}
								/>
							</View>
							<View style={styles.justifyContent}>
								<Button color={color.white} variant={'primary'} onPress={() => console.log('asasd')}
								        style={{width: 200}} title={'Kayıt Ol'}/>
							</View>
							<View style={[styles.justifyContent, {marginTop: 20}]}>
								<Button color={color.primary} variant={'link'} onPress={() => navigation.goBack()}
								        style={{width: 200}} title={'Giriş'}/>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</View>


		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.white,
	},
	content: {
		flex:1,
		paddingHorizontal: 10,
		padding:20,
	},
	loginHeader: {
		flex: 0.4,
		alignSelf: 'center',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center'
	},
	justifyContent: {
		justifyContent: 'center'
	},
	keyboardArea: {
		flex: 0.6,
	},
	inner: {
		flex: 1,
		alignContent: 'center',
	},
})

export default Register;