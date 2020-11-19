import React from 'react';
import {View} from "react-native";
import {Header, Button, Date,Input, GoBack} from "../../components";
import {color} from "../../components/ThemeConfig";

const CheckForm = () => {
	const onChange = (value) => {
		console.log(value);
	}
	return (
		<View>
			<Header title={'Talep Ekle'} description={'Yurtiçi Faktoring'} left={<GoBack/>}/>
			<View style={{
				padding: 20,
			}}>
				<Input placeholder={'FATURA BORÇLUSU VKN'}/>
				<Input placeholder={'FATURA TUTARI'}/>
				<Input placeholder={'Faturaya konu olan ticaretin içeriğini yazınız.'}/>
				<Input placeholder={'ÇEK MİKTARI'}/>
				<Input placeholder={'ÇEK TARİHİ'}/>
				<Input placeholder={'ÇEK VKN'}/>
				<Date onChange={onChange} label={'ÇEK TARİHİ'} />
				<Input placeholder={'ÇEK PARA BİRİMİ'}/>
				<Input placeholder={'ÇEK NUMARASI'}/>
				<Button variant={'primary'} title={'Devam'} color={color.white}/>
			</View>


		</View>
	)
}

export default CheckForm;