import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Dimensions, View} from "react-native";
import {color} from "../components/ThemeConfig";
import LinearGradient from "react-native-linear-gradient";
import {Text,Button, Header, UserComponent, GoBack} from "../components";

let {width: wWidth, height: wHeight} = Dimensions.get('window');
const CheckScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Header left={<GoBack navigation={navigation}/>} title={'Talep Ekle'} description={'Yurtiçi Faktoring'}/>
			<View style={{flex: 1, padding:10, backgroundColor: color.white,}}>
				<View style={{paddingVertical: 30}}>
					<Text center bold h5> Çekinizin karekodunu taratın.</Text>
				</View>
				<View>

				</View>
				<View style={{padding: 40,}}>
					<Button onPress={()=> navigation.navigate('checkAdd')} variant={'primary'} color={color.white} title={'Qr Kod Olmadan Devam Et'} />
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.gray,
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
	},
	bottomArea: {
		backgroundColor: color.white,
		flexDirection: 'row',
		borderRadius: 20,
		padding: 0,
		flex: 1,
	},
	ButtonArea: {
		backgroundColor: color.white,
		margin: 20,
		paddingTop: 30,
		paddingBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
		width: wWidth / 2 - 70
	}

})
export default CheckScreen;