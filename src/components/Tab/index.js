import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {color} from "../ThemeConfig";
import {Icon} from "../";

const routers = [
	{
		index: 1,
		icon: 'home',
		size: 20,
		color: color.white,
		name: 'Ana Sayfa',
	},
	{
		index: 2,
		icon: 'plus',
		icon2: 'x',
		size: 20,
		color: color.white,
		name: 'Boş',
	},
	{
		index: 3,
		icon: 'help-circle',
		size: 20,
		color: color.white,
		name: 'Yardım',
	},

];

function MyTabBar({state, descriptors, navigation}) {
	const focusedOptions = descriptors[state.routes[state.index].key].options;
	if (focusedOptions.tabBarVisible === false) {
		return null;
	}
	return (
			<View style={{flexDirection: 'row', borderTopWidth: 2,}}>
				{state.routes.map((route, index) => {
					const {options} = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});
						if (isFocused && index ===1){
							navigation.goBack();
						}
						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};
					const tab = routers.map((item) => item);
					return (
						<View
							key={index}
							style={{
								backgroundColor: isFocused ? color.gray : color.gray,
								flex: 1,
								padding: 20,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							{
								tab[index].index === 2 ? <TouchableOpacity
									accessibilityRole="button"
									accessibilityState={isFocused ? {selected: true} : {}}
									accessibilityLabel={options.tabBarAccessibilityLabel}
									testID={options.tabBarTestID}
									onPress={onPress}
									onLongPress={onLongPress}
									style={{
										backgroundColor: isFocused ? color.danger : color.gradientEnd,
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius:15,
										padding:15,
										marginTop:-83,
									}}
								>
									<Icon name={isFocused ? tab[index].icon2:tab[index].icon} size={30} color={isFocused ? color.white : color.gradientStart}/>
								</TouchableOpacity> : <TouchableOpacity
									accessibilityRole="button"
									accessibilityState={isFocused ? {selected: true} : {}}
									accessibilityLabel={options.tabBarAccessibilityLabel}
									testID={options.tabBarTestID}
									onPress={onPress}
									onLongPress={onLongPress}
									style={{
										backgroundColor: isFocused ? color.gray : color.gray,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Icon name={tab[index].icon} size={22} color={isFocused ? color.gradientStart : color.gradientEnd}/>
									<Text style={{color: isFocused ? color.gradientStart : color.gradientEnd}}>
										{tab[index].name}
									</Text>
								</TouchableOpacity>
							}
						</View>

					);
				})}
			</View>
	);
}

export default MyTabBar;