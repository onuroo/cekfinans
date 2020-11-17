import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Header, Input, Icon, Button, GoBack} from '../components'
import {color} from "../components/ThemeConfig";

const CheckAddScreen = ({navigation}) => {
	return (
		<View>
			<Header left={<GoBack />} title={'Talep Ekle'} description={'Faktoring'}/>
			<View style={{padding: 20}}>
				<View style={{
					flexDirection: 'row',
					marginBottom: 20,
					borderRadius: 10,
					justifyContent: 'space-between',
					backgroundColor: color.white,
					alignItems: 'center'
				}}>
					<View style={{padding: 20}}>
						<Text>
							Çekinizin önyüzünün fotoğrafını ekle
						</Text>
					</View>
					<TouchableOpacity style={{
						padding: 20,
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,
						alignItems: 'center',
						backgroundColor: color.gradientEnd
					}}>
						<View style={{
							borderRadius: 20,
							width: 30,
							height: 30,
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'center',
							borderWidth: 2,
							borderColor: color.turkuaz
						}}>
							<Icon color={color.turkuaz} name={'plus'} size={20}/>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{
					flexDirection: 'row',
					marginBottom: 20,
					borderRadius: 10,
					justifyContent: 'space-between',
					backgroundColor: color.white,
					alignItems: 'center'
				}}>
					<View style={{padding: 20}}>
						<Text>
							Çekinizin arkayüzünün fotoğrafını ekle
						</Text>
					</View>
					<TouchableOpacity style={{
						padding: 20,
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,
						alignItems: 'center',
						backgroundColor: color.gradientEnd
					}}>
						<View style={{
							borderRadius: 20,
							width: 30,
							height: 30,
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'center',
							borderWidth: 2,
							borderColor: color.turkuaz
						}}>
							<Icon color={color.turkuaz} name={'plus'} size={20}/>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{
					flexDirection: 'row',
					marginBottom: 20,
					borderRadius: 10,
					justifyContent: 'space-between',
					backgroundColor: color.white,
					alignItems: 'center'
				}}>
					<View style={{padding: 20}}>
						<Text>
							Çekinizin faturasının fotoğrafını ekle
						</Text>
					</View>
					<TouchableOpacity style={{
						padding: 20,
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,
						alignItems: 'center',
						backgroundColor: color.gradientEnd
					}}>
						<View style={{
							borderRadius: 20,
							width: 30,
							height: 30,
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'center',
							borderWidth: 2,
							borderColor: color.turkuaz
						}}>
							<Icon color={color.turkuaz} name={'plus'} size={20}/>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', alignItems: 'center'}}>
					<Input placeholder={'Çekinizin E-fatura Linki'}/>
				</View>
				<Button style={{flex: 1, width: '100%'}} color={color.white} onPress={() => navigation.navigate('checkForm')}
				        title={'Devam'}/>
			</View>

		</View>
	)
}
export default CheckAddScreen;