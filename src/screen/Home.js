import React,{useEffect,useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, Dimensions, View} from "react-native";
import {color} from "../components/ThemeConfig";
import LinearGradient from "react-native-linear-gradient";
import {Text, Header, UserComponent, Icon} from "../components";
import NavigationActions from '../navigation/navigationActions';

let {width: wWidth, height: wHeight} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {

	const { navigatePush } = NavigationActions();
	return (
		<View style={styles.container}>
			<Header left={
				<TouchableOpacity style={{padding: 20,}} onPress={() => {
					navigation.toggleDrawer();
				}}>
					<Icon name={'user'} size={22} color={color.white} />
				</TouchableOpacity>
			} center
            right={
                <TouchableOpacity style={{alignItems: 'center',justifyContent: 'center',}} onPress={() => {
					navigatePush('Notifications')
                }}>
                    <Icon name={'bell'} size={22} color={color.white}/>
                </TouchableOpacity>
            }
            />
			<View style={{flex: 1}}>
				<LinearGradient colors={[color.gradientStart, color.gradientStart, color.gradientEnd]}
				                style={styles.linearGradient}>
					<UserComponent />
				</LinearGradient>
			</View>
			<View style={{flex: 0.5, padding: 30}}>
				<View style={styles.bottomArea}>
					<TouchableOpacity onPress={() => navigatePush('list')}>
						<View style={[styles.ButtonArea, {borderBottomWidth: 4, borderColor: color.theme}]}>
							<Image style={{marginBottom: 10, width: wWidth / 2 - 70, resizeMode: 'contain', height: 50}}
							       source={require('../assets/cek-icon.fw.png')}/>
							<Text color={color.gradientEnd} p style={{fontWeight: '600'}}>
								Taleplerim
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigatePush('firmSettings', { fromLogin: false })}>
						<View style={[styles.ButtonArea, {borderBottomWidth: 4, borderColor: color.gradientEnd}]}>
							<Image style={{marginBottom: 10, width: wWidth / 2 - 70, resizeMode: 'contain', height: 50}}
							       source={require('../assets/setttings-icon-2.fw.png')}/>
							<Text color={color.gradientEnd} p style={{fontWeight: '600'}}>
								İşletme Ayarları
							</Text>
						</View>
					</TouchableOpacity>
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
        backgroundColor: color.gray,
        flexDirection: 'row',
        top: -100,
        borderRadius: 20,
        padding: 0,
        zIndex: 2
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
export default HomeScreen;