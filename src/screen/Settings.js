import React from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Button,Header, Input} from "./../components";
import {color} from "../components/ThemeConfig";

const SettingsScreen = () => {
	let object = 'Konu :';
	return (
		<View style={styles.container}>
			<Header center/>
			<View style={styles.content}>

				<View style={{
					paddingVertical: 50,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<Text color={color.secondary2} h5> Görüş ve önerilerinizi bize yazın. </Text>
				</View>
				<View>
					<Input height={50} text={object}/>
				</View>
				<View>
					<Input style={{height: 150, padding: 10}} multiline={true} placeholder={'Mesajınız'}/>
				</View>
				<View>
					<Button color={color.white} title={'Gönder'} variant={'primary'}></Button>
				</View>
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
		flex: 1,
		padding: 20,
		backgroundColor: color.white,
	},
})
export default SettingsScreen;