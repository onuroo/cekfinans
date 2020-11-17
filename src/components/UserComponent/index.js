import React from 'react';
import {View, Image} from "react-native";
import {color} from "../ThemeConfig";
import {Icon, Text} from "../index";

const UserComponent = ({name, image}) => {
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			{image ?
				<View style={{
					width: 150,
					height: 150,
					borderRadius: 100,
					overflow: 'hidden',
					marginBottom: 15,
					alignItems: 'center',
					borderWidth: 4,
					borderColor: color.turkuaz,
					backgroundColor: color.gray
				}}>
					<Image source={image} style={{width: 150, height: 150, resizeMode: 'cover'}}/>
				</View> :
				<View style={{
					width: 150,
					height: 150,
					borderRadius: 100,
					overflow: 'hidden',
					marginBottom: 15,
					alignItems: 'center',
					justifyContent: 'flex-end',
					borderWidth: 4,
					borderColor: color.turkuaz,
					backgroundColor: color.gray
				}}>
					<Icon size={150} color={color.secondary} name={'user'}/>
				</View>
			}
			<View>
				<Text h5 color={color.white}>
					{name}
				</Text>
			</View>
		</View>
	)
}
export default UserComponent;