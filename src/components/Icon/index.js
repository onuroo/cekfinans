import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

const MyIcon = ({color, size, name}) => {
	return (
		<Icon color={color} size={size} name={name}></Icon>
	)
}

export default MyIcon;