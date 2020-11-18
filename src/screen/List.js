import React from 'react'
import {View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Header, Icon, GoBack} from '../components'
import {SwipeListView} from 'react-native-swipe-list-view';
import {color} from "../components/ThemeConfig";
import ListItem from './List/ListItem.js'
import {navigate} from "../config/navigator";
let data = [
	{
		id: 1,
		createDate: '14/11/2020 22:17',
		label: 'Yurtiçi Faktoring',
		checkNumber: '88888888888',
		checkDate: '30/11/2020',
		checkPrice: '120000.00 TL',
		demand: true,
	},
	{
		id: 2,
		createDate: '14/11/2020 22:17',
		label: 'Yurtiçi Faktoring',
		checkNumber: '88888888888',
		checkDate: '30/11/2020',
		checkPrice: '120000.00 TL',
		demand: true,
	},
	{
		id: 3,
		createDate: '14/11/2020 22:17',
		label: 'Yurtiçi Faktoring',
		checkNumber: '88888888888',
		checkDate: '30/11/2020',
		checkPrice: '120000.00 Tl',
		demand: true,
	},
	{
		id: 4,
		createDate: '14/11/2020 22:17',
		label: 'Yurtiçi Faktoring',
		checkNumber: '88888888888',
		checkDate: '30/11/2020',
		checkPrice: '120000.00 TL',
		demand: true,
	},
]
const ListScreen = () => {
	return (
		<View style={styles.container}>
			<Header left={<GoBack/>} title={'Taleplerim'}/>
			<View style={styles.container}>
				<SwipeListView
					data={data}
					renderItem={({item: data}, rowMap) => (
						<ListItem data={data} />
					)}
					renderHiddenItem={(data, rowMap) => (
						<View keyExtractor={item => item.id.toString()} style={styles.rowBack}>
							<TouchableOpacity onPress={()=> console.log(data.id)} style={[styles.actionsButton, styles.firstButton]}>
								<Text medium p color={color.white} center>Tekliflere Aç</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={()=> navigate('listDetail',{data:data})} style={[styles.actionsButton, styles.secondButton]}>
								<Text medium p color={color.white} center>Çek Detayları</Text>
							</TouchableOpacity>
						</View>
					)}
					leftOpenValue={0}
					rightOpenValue={-(Dimensions.get('window').width / 2)}
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