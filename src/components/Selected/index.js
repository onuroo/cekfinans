import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Modal,TextInput, ScrollView, TouchableOpacity} from 'react-native'
import {Icon, Input,  Text} from '../index';
import {color} from "../ThemeConfig";

const Selected = ({placeholder,selected,setSelected, type,data}) => {
	let [visible, setVisible] = useState(false);
	let [searchText, setSearch] = useState('');
	let select = selected ? selected :{id:0,title:`${placeholder}`};
	return (
		<View styles={styles.container}>
			<TouchableOpacity style={styles.text} onPress={() => setVisible(!visible)}>
				<Text color={color.gradientEnd} h6>{select.title ? select.title : placeholder}</Text>
				<Icon
					name={'chevron-down'}
					size={22}
					color={color.primary}
				/>
			</TouchableOpacity>
			<Modal setVisible={setVisible} visible={visible} ratio={0.5}>
				<View style={{
					paddingVertical: 20,
					marginTop: 20,
					paddingHorizontal: 10,
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'row',
					borderBottomWidth: 2,
					borderColor: color.gray
				}}>
					<Text h6 bold>{placeholder}</Text>
					<TouchableOpacity activeOpacity={.9} onPress={() => setVisible(!visible)}>
						<Icon
							name={'x'}
							size={22}
							color={color.danger}
						/>
					</TouchableOpacity>
				</View>
				<View style={{
					marginTop: 10,
					marginBottom: 10,
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'row',
					borderBottomWidth: 2,
					borderColor: color.gray
				}}>
					<Input placeholder={'Ara'} style={{flex: 1, height: 40, fontSize: 15, backgroundColor: 'transparent'}}
					       value={searchText} onChangeText={text => setSearch(text)}/>
				</View>
				<ScrollView>
					{data.length > 0 && data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).map(item => {
						return (
							<TouchableOpacity onPress={()=> {
								setSelected(item)
							}} style={styles.listItem} key={item.id}>
								<Text medium color={color.primary} h6>{item.title}</Text>
								{select.id !== 0 && select.id === item.id && (
									<Icon color={color.primary} name={'check'} size={20}/>
								)}
							</TouchableOpacity>
						)
					})}
				</ScrollView>
			</Modal>
		</View>
	)

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderBottomWidth: 2,
		borderColor: color.gray,
		flexDirection:'row',
		justifyContent:'space-between'
	},
	listItem: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderBottomWidth: 2,
		borderColor: color.gray,
		flexDirection:'row',
		justifyContent:'space-between'
	}

})

export default Selected;