import React from 'react'
import {View, StyleSheet,Image} from 'react-native'
import {GoBack, Header,Icon, Text} from '../components'
import {color} from "../components/ThemeConfig";

const ListDetailScreen = ({navigation, route}) => {
	let data = route.params.data.item
	return (
		<View style={styles.container}>
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
						<Text color={color.secondary2} right>Çek No</Text>
						<Text bold>{data.checkNumber}</Text>
					</View>
					<View>
						<Text color={color.secondary2} right>Çek Tarihi</Text>
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
						<Text right h5 bold> {data.checkPrice}</Text>
					</View>
				</View>
				<View style={{padding: 10, backgroundColor: color.gray}}>
					<View style={[{
						flexDirection: 'row',
						padding: 20,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: color.white
					}]}>
						<View>
							<Text color={color.turkuaz} h6>
								Kalan süre :
							</Text>
						</View>
						<View style={{flexDirection: 'row', paddingLeft: 10,}}>
							<Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
								00
							</Text>
							<Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
								:
							</Text>
							<Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
								00
							</Text>
							<Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
								:
							</Text>
							<Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
								00
							</Text>
							<Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
								:
							</Text>
							<Text color={color.turkuaz} bold h6>
								00
							</Text>
						</View>
					</View>
					<View style={[styles.bottomRow]}>
						<View>
							<Text color={color.secondary2} p center>KEŞİDECİ VKN</Text>
							<Text bold p center>124124124124</Text>
						</View>
						<View>
							<Text color={color.secondary2} p center>YÜKLEME TARİHİ</Text>
							<Text bold p center>14-11-2020 22:17:34</Text>
						</View>
					</View>
					<View style={[styles.bottomRow]}>
						<View>
							<Text p bold center>ÇEK ÖNYÜZÜ</Text>
						</View>
						<View>
							<Image style={{width:50,height: 50, resizeMode:'contain'}} source={require('./../assets/cek-on.png')} />
						</View>
					</View>
					<View style={[styles.bottomRow]}>
						<View>
							<Text p bold center>ÇEK ARKA YÜZÜ</Text>
						</View>
						<View >
							<Image style={{width:50,height: 50, resizeMode:'contain'}} source={require('./../assets/cek-arka.png')} />
						</View>
					</View>
					<View style={[styles.bottomRow,{backgroundColor: color.lightGray}]}>
						<View>
							<Text color={color.secondary2} p center>TOPLAM FATURA TUTARI:</Text>
						</View>
						<View>
							<Text bold p center>22001.00 TL</Text>
						</View>
					</View>
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
		height: 60,
		paddingHorizontal: 15,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: color.gradientStart2,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: color.secondary,
	},
	bottomRow: {
		flexDirection: 'row',
		marginTop: 20,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: color.white
	}
})

export default ListDetailScreen;