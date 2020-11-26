import React, {useState} from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet
} from 'react-native'
import {Text, Header, CheckBox, Icon, Button, Logo, Input} from './../../components'
import {color, fontSize} from "../../components/ThemeConfig";
import LinearGradient from 'react-native-linear-gradient';

import LoginHooks from '../../hooks/login.hooks';
const Login = ({navigation, route}) => {
	let [tab, setTab] = useState(1)
	let [Check1, setCheck1] = useState(false)
	let [Check2, setCheck2] = useState(false)
	
	const {
		tckn,
		setTckn,
		password,
		setPassword,
		onLogin,
	} = LoginHooks();
	
	let [showPassword, setShowPassword] = useState(true)
	let [registerShowPassword, setRegisterShowPassword] = useState(true)
	let [registerShowRepeatPassword, setRegisterShowRepeatPassword] = useState(true)

	return (
		<View style={styles.container}>
			<Header center={<Logo/>}/>
			<LinearGradient colors={[color.gradientStart, color.gradientStart, color.gradientEnd]}
			                style={styles.linearGradient}>
				<View style={styles.tabBar}>
					<TouchableOpacity
						onPress={() => {
							setTab(1)
						}}
						style={[{backgroundColor: tab === 1 ? color.theme : color.gradientEnd}, styles.tabButton, styles.tabButtonLeft]}>
						<Text color={tab === 1 ? color.black : color.white} h6>
							Giriş Yap
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {
						setTab(2)
					}}
					                  style={[{backgroundColor: tab === 2 ? color.theme : color.gradientEnd}, styles.tabButton, styles.tabButtonRight]}>
						<Text color={tab === 2 ? color.black : color.white} h6>
							Üye Ol
						</Text>
					</TouchableOpacity>
				</View>
				{tab === 1 ?
					<View style={{flex: 0.8}}>
						<View style={{paddingHorizontal: 50, marginBottom: 50}}>
							<Text center h5 color={color.white}>
								Aktif bir Çek Finans üyeliğiniz varsa hemen giriş yapın.
							</Text>
						</View>
						<View style={styles.justifyContent}>
							<Input onChangeText={(val) => setTckn(val)}
								   value={ tckn }
							       autoCapitalize={'none'}
							       autoCompleteType={'off'}
							       keyboardType={'numeric'}
							       placeholder={'TCKN'}
							       maxLength={11}
							/>
							<Input
								onChangeText={(val) => setPassword(val)}
								value={ password }
								autoCapitalize={'none'}
								autoCompleteType={'off'}
								placeholder={'Şifre'}
								secureTextEntry={showPassword}
								rightIcon={
									<TouchableOpacity onPress={() => {
										setShowPassword(!showPassword)
									}}>
										<Icon size={22} name={!showPassword ? 'eye-off' : 'eye'} color={color.black}/>
									</TouchableOpacity>
								}
							/>
						</View>
						<View style={{marginVertical: 50, justifyContent: 'center', alignItems: 'center'}}>
							<TouchableOpacity onPress={()=> {
								navigation.navigate('forgot');
							}}>
								<View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
									<View style={{borderBottomWidth: 0.5, paddingBottom: 5, borderBottomColor: color.white}}>
										<Text color={color.white}>
											Şifremi Unutttum
										</Text>
									</View>
									<Icon size={22} name={'chevron-right'} color={color.white}/>
								</View>
							</TouchableOpacity>
						</View>
					</View> :
					<View style={{flex: 0.8}}>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       keyboardType={'numeric'}
						       placeholder={'TCKN'}
						       maxLength={11}
						/>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       placeholder={'Ad Soyad'}
						/>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       keyboardType={'numeric'}
						       placeholder={'Telefon'}
						/>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       placeholder={'E Posta'}
						       keyboardType={'email-address'}
						/>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       placeholder={'Şifre'}
						       secureTextEntry={registerShowPassword}
						       rightIcon={
							       <TouchableOpacity onPress={() => {
								       setRegisterShowPassword(!registerShowPassword)
							       }}>
								       <Icon size={22} name={!registerShowPassword ? 'eye-off' : 'eye'} color={color.black}/>
							       </TouchableOpacity>
						       }
						/>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       placeholder={'Şifre Tekrar'}
						       secureTextEntry={registerShowRepeatPassword}
						       rightIcon={
							       <TouchableOpacity onPress={() => {
								       setRegisterShowRepeatPassword(!registerShowRepeatPassword)
							       }}>
								       <Icon size={22} name={!registerShowRepeatPassword ? 'eye-off' : 'eye'} color={color.black}/>
							       </TouchableOpacity>
						       }
						/>
						<View style={{flexDirection: 'row', marginBottom: 10}}>
							<TouchableOpacity onPress={() => setCheck1(!Check1)} style={styles.checkArea}>
								<CheckBox value={Check1}/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setCheck1(!Check1)} style={styles.checkText}>
								<Text style={{fontSize: 12, fontWeight: '900'}} color={color.white}> KVKK Aydınlatma metni ve açık rıza
									sözleşmesini okudum.</Text>
							</TouchableOpacity>
						</View>
						<View style={{flexDirection: 'row', marginBottom: 10}}>
							<TouchableOpacity onPress={() => setCheck2(!Check2)} style={styles.checkArea}>
								<CheckBox value={Check2}/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setCheck2(!Check2)} style={styles.checkText}>
								<Text style={{fontSize: 12, fontWeight: '900'}} color={color.white}> Çek Finans sözleşmesini
									okudum.</Text>
							</TouchableOpacity>
						</View>
					</View>}
				<View style={[styles.justifyContent, {flex: 0.2}]}>
					<Button color={color.white} variant={'primary'} onPress={ onLogin }
					        style={{width: 200}} title={'Giriş Yap'}/>
				</View>

			</LinearGradient>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.white,
	},
	tabBar: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 20,
	},
	tabButton: {
		flex: 1,
		height: 40,
	},
	tabButtonLeft: {
		borderTopLeftRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomLeftRadius: 20,
	},
	tabButtonRight: {
		borderTopRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomRightRadius: 20,
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
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
	},
	keyboardArea: {
		flex: 0.6,
	},
	inner: {
		flex: 1,
		alignContent: 'center',
	},
	checkArea: {
		marginRight: 10,
	},
	checkText: {
		justifyContent: 'center',
		flex: 1
	}
})

export default Login;