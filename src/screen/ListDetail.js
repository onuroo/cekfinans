import React from 'react'
import {View, StyleSheet} from 'react-native'
import {GoBack, Header, Icon, Text} from '../components'
import {color} from "../components/ThemeConfig";
const ListDetailScreen = ({navigation,route}) => {let data = route.params.data.item
	return (
		<View>
			<Header left={<GoBack/>} title={'Çek Detay'}/>
			<View
				style={[styles.rowFront]}>
				<View style={styles.row}>
					<Text>{data.createDate}</Text>
					<Text>{data.label}</Text>
				</View>
				<View style={[styles.row, {
					borderTopWidth: 1,
					borderColor: color.gray,
					paddingTop: 10,
				}]}>
					<View>
						<Text right>Çek No</Text>
						<Text bold>{data.checkNumber}</Text>
					</View>
					<View>
						<Text right>Çek Tarihi</Text>
						<Text bold>{data.checkDate}</Text>
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={styles.bottom}>
						<Text p center color={color.gradientEnd}> HENÜZ TEKLİF YOK</Text>
					</View>
					<View style={[styles.bottom, {
						backgroundColor: color.gray,
						justifyContent: 'flex-end',
					}]}>
						<Text right h6 bold> {data.checkPrice}</Text>
					</View>
				</View>
			</View>
		</View>
	)

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowFront: {
		backgroundColor: color.white,
		marginBottom: 5
	},
	row: {
		flexDirection: 'row',
		paddingVertical: 10,
		paddingBottom: 20,
		paddingTop: 5,
		justifyContent: 'space-around'
	},
	bottom: {
		padding: 25,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: color.gradientStart2,
		flexDirection: 'row'
	}
})

export default ListDetailScreen;