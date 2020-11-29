import React, {useState, forwardRef, useImperativeHandle} from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet
} from 'react-native'
import {Text, Header, CheckBox, Icon, Button, Logo, Input} from './../../components'
import {color, fontSize} from "../../components/ThemeConfig";
import LinearGradient from 'react-native-linear-gradient';

import RegisterHooks from '../../hooks/register.hooks';

const Register = forwardRef((props, ref) => {
	let [registerShowPassword, setRegisterShowPassword] = useState(true);
	let [registerShowRepeatPassword, setRegisterShowRepeatPassword] = useState(true);


	useImperativeHandle(ref, () => ({
		onRegister,
	  }));

	const {
		namesurname, setNamesurname,
		tckn, setTckn,
		phone, setPhone,
		email, setEmail,
		password, setPassword,
		passwordAgain, setPasswordAgain,
		checkKvkk, setCheckKVkk,
		checkTerm, setCheckTerm,
		onRegister
	} = RegisterHooks();

	return (
		<View style={{flex: 0.8}}>
		<Input onChangeText={(val) => setTckn(val) }
			   value={ tckn }
			   autoCapitalize={'none'}
			   autoCompleteType={'off'}
			   keyboardType={'numeric'}
			   placeholder={'TCKN'}
			   maxLength={11}
		/>
		<Input onChangeText={(val) => setNamesurname(val) }
			   value={ namesurname }
			   autoCapitalize={'none'}
			   autoCompleteType={'off'}
			   placeholder={'Ad Soyad'}
		/>
		<Input onChangeText={(val) => setPhone(val) }
			   value={ phone }
			   autoCapitalize={'none'}
			   autoCompleteType={'off'}
			   keyboardType={'numeric'}
			   placeholder={'Telefon'}
		/>
		<Input onChangeText={(val) => setEmail(val) }
			   value={ email }
			   autoCapitalize={'none'}
			   autoCompleteType={'off'}
			   placeholder={'E Posta'}
			   keyboardType={'email-address'}
		/>
		<Input onChangeText={(val) => setPassword}
			   value={ password }
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
		<Input onChangeText={(val) => setPasswordAgain(val)}
			   value={ passwordAgain }
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
			<TouchableOpacity onPress={() => setCheckKVkk(!checkKvkk)} style={styles.checkArea}>
				<CheckBox value={checkKvkk}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setCheckKVkk(!checkKvkk)} style={styles.checkText}>
				<Text style={{fontSize: 12, fontWeight: '900'}} color={color.white}> KVKK Aydınlatma metni ve açık rıza
					sözleşmesini okudum.</Text>
			</TouchableOpacity>
		</View>
		<View style={{flexDirection: 'row', marginBottom: 10}}>
			<TouchableOpacity onPress={() => setCheckTerm(!checkTerm)} style={styles.checkArea}>
				<CheckBox value={checkKvkk}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setCheckTerm(!checkTerm)} style={styles.checkText}>
				<Text style={{fontSize: 12, fontWeight: '900'}} color={color.white}> Çek Finans sözleşmesini
					okudum.</Text>
			</TouchableOpacity>
		</View>
	</View>
	)
});

const styles = StyleSheet.create({
	
})

export default Register;