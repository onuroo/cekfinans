import React, {useEffect, useState} from 'react'
import {View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Header, Icon, GoBack} from '../components'
import {SwipeListView} from 'react-native-swipe-list-view';
import {color} from "../components/ThemeConfig";
import ListItem from './List/ListItem.js'
import NavigationActions from '../navigation/navigationActions';

import request from "../config/request";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ListScreen = ({navigation}) => {
	let [data,setData] = useState([]);

	const { navigatePush } = NavigationActions();
	useEffect(()=> {
		let getList = async () =>  {
			let userInfo = await AsyncStorage.getItem('userInfo');
			await request.post('check/list',{token:JSON.parse(userInfo).token}).then(res => setData(res.checks)).catch(e => console.log(e));
		}
		getList();
	},[])
	return (
		<View style={styles.container}>
			<Header left={<GoBack/>} title={'Taleplerim'}/>
			<View style={styles.container}>
				<SwipeListView
					data={data}
					renderItem={( data, rowMap) => (
						<ListItem keyExtractor={(data) => data.index.toString()} data={data.item} />
					)}
					renderHiddenItem={(data, rowMap) => (
						<View keyExtractor={item => data.index.toString()} style={styles.rowBack}>
							<TouchableOpacity onPress={()=> navigatePush('listDetail',{data:data.item})} style={[styles.actionsButton, styles.secondButton]}>
								<Text medium p color={color.white} center>Çek Detayları</Text>
							</TouchableOpacity>
						</View>
					)}
					leftOpenValue={0}
					rightOpenValue={-(Dimensions.get('window').width / 2) / 2}
				/>
			</View>

		</View>
	)

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowBack: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingBottom: 5,
	},
	actionsButton: {
		justifyContent: 'center',
		alignItems: 'center',
		width: (Dimensions.get('window').width / 2) / 2,
		padding: 15,
		textAlign: 'center',
	},
	firstButton: {
		backgroundColor: color.theme
	},
	secondButton: {
		backgroundColor: color.secondary
	},
	content: {}
})

export default ListScreen;