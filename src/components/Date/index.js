import React, {useState,useEffect} from 'react';
import {View, Modal,TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Button, Icon, Input, Text} from '../index';
import {LocaleConfig} from 'react-native-calendars';
import {color} from '../ThemeConfig';
import moment from 'moment';

LocaleConfig.locales.tr = {
	monthNames: [
		'Ocak',
		'Şubat',
		'Mart',
		'Nisan',
		'Mayıs',
		'Haziran',
		'Temmuz',
		'Ağustos',
		'Eylül',
		'Ekim',
		'Kasım',
		'Aralık',
	],
	monthNamesShort: [
		'Oc..',
		'Şub..',
		'Mart',
		'Nis',
		'May.',
		'Haz.',
		'Tem..',
		'Agu.',
		'Eyl..',
		'Ekm.',
		'Kas.',
		'Ar.',
	],
	dayNames: [
		'Pazartesi',
		'Salı',
		'Çarşamba',
		'Perşembe',
		'Cuma',
		'Cumartesi',
		'Pazar',
	],
	dayNamesShort: ['Pzt.', 'Sl.', 'Çar.', 'Per.', 'Cu.', 'Cts.', 'Pzr.'],
	today: 'Bugün',
};
LocaleConfig.defaultLocale = 'tr';
const Dates = ({setSelected,selected, label,}) => {
	const [show, setShow] = useState(false);
	const [date, setDate] = useState(selected !== null ? moment(selected,'DD-MM-YYYY').format('YYYY-MM-DD'):'');
	useEffect(()=> {
		moment().locale('tr');
	})
	return (
		<View style={{paddingBottom: 10}}>
			<TouchableOpacity style={{
				height: 50,
				fontWeight: "600",
				backgroundColor: color.gray,
				borderColor: color.primary,
				alignContent: 'center',
				borderRadius: 10,
			}} onPress={() => setShow(!show)}>
				<View style={{
					flexDirection: 'row',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 10,
				}}>
					<Text color={color.primary} bold>
						{date ?  moment(date).format('DD-MM-YYYY') : label}
					</Text>
					{date ? <TouchableOpacity onPress={() => setDate('')}>
							<Icon name={'x'} color={color.danger} size={24}/>
						</TouchableOpacity> :
						<Icon name={'chevron-down'} color={color.primary} size={24}/>
					}
				</View>

			</TouchableOpacity>

			<View>
				<Modal
					style={{margin: 0}}
					backdropColor={color.primary}
					setVisible={setShow}
					ratio={0.8}
					visible={show}
					isOpen={show}>
					<View style={{flex: 1, backgroundColor: color.white}}>
						<View style={{
							paddingVertical: 20,
							paddingHorizontal: 10,
							alignItems: 'center',
							justifyContent: 'space-between',
							flexDirection: 'row',
							borderBottomWidth: 2,
							borderColor: color.gray
						}}>
							<Text p bold>{label}</Text>
							<TouchableOpacity activeOpacity={.9} onPress={() => setShow(!show)}>
								<Icon
									name={'x'}
									size={22}
									color={color.danger}
								/>
							</TouchableOpacity>
						</View>

						<View style={{marginTop: 20}}>
							<Calendar
								// Specify style for calendar container element. Default = {}
								style={{
									borderWidth: 0,
								}}
								current={date}
								hideArrows={false}
								renderArrow={(direction) => {
									return direction === 'left' ? (
										<Icon
											name={'chevron-left'}
											color={color.primary}
											size={22}
										/>
									) : (
										<Icon
											name={'chevron-right'}
											color={color.primary}
											size={22}
										/>
									);
								}}
								onDayPress={(day) => {
									setSelected(
										moment(day.dateString).format('DD-MM-YYYY'),
									);
									setDate(day.dateString);
								}}
								disableAllTouchEventsForDisabledDays={true}
								markedDates={{
									[date]: {
										selected: true,
										disableTouchEvent: true,
										selectedColor: color.success,
										selectedTextColor: color.white,
									},
								}}
								// Specify theme properties to override specific styles for calendar parts. Default = {}
								theme={{
									backgroundColor: color.primary,
									calendarBackground: color.white,
									textSectionTitleColor: color.primary,
									textSectionTitleDisabledColor: color.primary,
									todayTextColor: color.gradientEnd,
									dayTextColor: color.primary,
									textDisabledColor: color.gray,
									dotColor: color.primary,
									selectedDotColor: color.primary,
									arrowColor: color.primary,
									arrowTextColor: color.primary,
									disabledArrowColor: color.gray,
									monthTextColor: color.primary,
									indicatorColor: color.primary,
									textDayFontFamily: 'NunitoSans-Regular',
									textMonthFontFamily: 'NunitoSans-Regular',
									textDayHeaderFontFamily: 'NunitoSans-Regular',
									textDayFontWeight: '400',
									textMonthFontWeight: 'bold',
									textDayHeaderFontWeight: '600',
									textDayFontSize: 12,
									textMonthFontSize: 12,
									textDayHeaderFontSize: 12,
								}}
							/>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
};
export default Dates;
