import React from 'react'
import {View, StyleSheet} from 'react-native'
import {color} from "../../components/ThemeConfig";
import {Icon, Text} from "../../components";

const ListItem = ({data}) => {
	return (
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
					<Icon size={18} color={color.white} name={'chevron-left'}/>
					<Text center p color={color.white}> TEKLİFLERE AÇ</Text>
				</View>
				<View style={[styles.bottom, {
					backgroundColor: color.gray,
					justifyContent: 'flex-end',
				}]}>
					<Text style={{textAlign: 'right'}} h6 bold> {data.checkPrice}</Text>
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
		borderRightWidth: 10,
		borderColor: color.theme,
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
		backgroundColor: color.gradientEnd,
		flexDirection: 'row'
	}
})

export default ListItem;