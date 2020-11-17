import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button, Logo, Header, GoBack} from '../../components';
import {color} from "../../components/ThemeConfig";
import LinearGradient from "react-native-linear-gradient";

const ForgotScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Header left={<GoBack navigation={navigation}/>} center={<Logo/>}/>
			<LinearGradient colors={[color.gradientStart, color.gradientStart, color.gradientEnd]}
			                style={styles.linearGradient}>
				<View style={{flex: 1, paddingVertical: 50}}>
					<View style={{flex: 0.5, }}>
						<View style={{paddingBottom: 100}}>
							<Text center color={color.white} h4>
								11 haneli TCKNN'nizi giriniz.
							</Text>
						</View>
						<Text color={color.white} center h6 style={{fontWeight: 'bold'}}>
							Sisteme kayıtlı telefon numaranıza doğrulama kodunuz gelecektir.
						</Text>
					</View>
					<View style={{flex: 0.5, justifyContent:'space-between', paddingVertical: 50}}>
						<Input onChangeText={(val) => console.log(val)}
						       autoCapitalize={'none'}
						       autoCompleteType={'off'}
						       keyboardType={'numeric'}
						       placeholder={'TCKN'}
						       maxLength={11}
						/>
						<View style={{alignItems: 'center'}}>
							<View style={{width: 200, alignContent: 'center', justifyContent: 'center'}}>
								<Button color={color.white} variant={'primary'} onPress={() => console.log('asasd')}
								        title={'GÖNDER'}/>
							</View>
						</View>
					</View>

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
export default ForgotScreen;