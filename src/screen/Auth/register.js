import React, {useState, forwardRef, useImperativeHandle, useEffect} from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
    Modal,
    TouchableWithoutFeedback
} from 'react-native'
import {Text, CheckBox, Icon, Button, Logo, Input} from './../../components'
import {color, fontSize} from "../../components/ThemeConfig";
import LinearGradient from 'react-native-linear-gradient';
import request from "../../config/request";
import RegisterHooks from '../../hooks/register.hooks';
import HTMLView from 'react-native-htmlview';

const Register = forwardRef((props, ref) => {
    let [registerShowPassword, setRegisterShowPassword] = useState(true);
    let [registerShowRepeatPassword, setRegisterShowRepeatPassword] = useState(true);
    let [kvkkModal, setKvkkModal] = useState(false);
    let [contractModal, setContractModal] = useState(false);
    let [kvkk, setKvkk] = useState(null)
    let [contract, setContract] = useState(null)
    useImperativeHandle(ref, () => ({
        onRegister,
    }));
    useEffect(() => {
        request.post('common/kvkk').then(res => setKvkk(res.kvkk))
        request.post('common/contract').then(res => setContract(res.contract))
    }, [])
    const {
        namesurname, setNamesurname,
        tckn, setTckn,
        phone, setPhone,
        email, setEmail,
        password, setPassword,
        passwordAgain, setPasswordAgain,
        checkKvkk, setCheckKVkk,
        checkTerm, setCheckTerm,
        onRegister
    } = RegisterHooks();

    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <TouchableWithoutFeedback style={{padding: 24,}} onPress={Keyboard.dismiss}>
                <ScrollView style={{flex: 0.8}}>
                    <Input onChangeText={(val) => setTckn(val)}
                           value={tckn}
                           autoCapitalize={'none'}
                           autoCompleteType={'off'}
                           keyboardType={'numeric'}
                           placeholder={'TCKN'}
                           maxLength={11}
                    />
                    <Input onChangeText={(val) => setNamesurname(val)}
                           value={namesurname}
                           autoCapitalize={'none'}
                           autoCompleteType={'off'}
                           placeholder={'Ad Soyad'}
                    />
                    <Input onChangeText={(val) => setPhone(val)}
                           value={phone}
                           autoCapitalize={'none'}
                           autoCompleteType={'off'}
                           keyboardType={'numeric'}
                           placeholder={'Telefon'}
                           maxLength={11}
                    />
                    <Input onChangeText={(val) => setEmail(val)}
                           value={email}
                           autoCapitalize={'none'}
                           autoCompleteType={'off'}
                           placeholder={'E Posta'}
                           keyboardType={'email-address'}
                    />
                    <Input onChangeText={(val) => setPassword(val)}
                           value={password}
                           autoCapitalize={'none'}
                           autoCompleteType={'off'}
                           placeholder={'Şifre'}
                           secureTextEntry={registerShowPassword}
                           rightIcon={
                               <TouchableOpacity onPress={() => {
                                   setRegisterShowPassword(!registerShowPassword)
                               }}>
                                   <Icon size={22} name={!registerShowPassword ? 'eye-off' : 'eye'}
                                         color={color.black}/>
                               </TouchableOpacity>
                           }
                    />
                    <Input onChangeText={(val) => setPasswordAgain(val)}
                           value={passwordAgain}
                           autoCapitalize={'none'}
                           autoCompleteType={'off'}
                           placeholder={'Şifre Tekrar'}
                           secureTextEntry={registerShowRepeatPassword}
                           rightIcon={
                               <TouchableOpacity onPress={() => {
                                   setRegisterShowRepeatPassword(!registerShowRepeatPassword)
                               }}>
                                   <Icon size={22} name={!registerShowRepeatPassword ? 'eye-off' : 'eye'}
                                         color={color.black}/>
                               </TouchableOpacity>
                           }
                    />
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <TouchableOpacity onPress={() => setCheckKVkk(!checkKvkk)} style={styles.checkArea}>
                            <CheckBox value={checkKvkk}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setKvkkModal(!kvkkModal)} style={styles.checkText}>
                            <Text style={{fontSize: 12, fontWeight: '900'}} color={color.white}> KVKK Aydınlatma metni
                                ve
                                açık rıza
                                sözleşmesini okudum.</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal visible={kvkkModal} setVisible={setKvkkModal}>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <Text h5 style={{flex: 0.9}}> KVKK Aydınlatma Metni </Text>
                            <TouchableOpacity
                                style={{flex: 0.1, justifyContent: 'flex-end'}}
                                onPress={() => setKvkkModal(false)}>
                                <Icon name={'x'} color={color.danger} size={25}/>
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={{padding:10,paddingBottom:50}}>
                            <HTMLView value={kvkk}/>
                            <View style={{marginVertical:20}}>

                            <Button color={color.white} variant={'primary'} title={'Onayla'}
                                    onPress={() => {
                                        setKvkkModal(false)
                                        setCheckKVkk(true)
                                    }}/>
                            </View>

                        </ScrollView>

                    </Modal>

                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <TouchableOpacity onPress={() => setCheckTerm(!checkTerm)} style={styles.checkArea}>
                            <CheckBox value={checkTerm}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setContractModal(!contractModal)} style={styles.checkText}>
                            <Text style={{fontSize: 12, fontWeight: '900'}} color={color.white}> Çek Finans sözleşmesini
                                okudum.</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal visible={contractModal} ratio={0.5} setVisible={setContractModal}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}>
                            <Text h5 style={{flex: 0.9}}> Çek Finans Sözleşmesi </Text>
                            <TouchableOpacity
                                style={{flex: 0.1, justifyContent: 'flex-end',}}
                                onPress={() => setContractModal(false)}>
                                <Icon name={'x'} color={color.danger} size={25}/>
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={{padding:10,paddingBottom:50}}>
                            <HTMLView value={contract}/>
                            <View style={{marginVertical:20}}>
                            <Button color={color.white} variant={'primary'} title={'Onayla'}
                                    onPress={() => {
                                        setContractModal(false)
                                        setCheckTerm(true)
                                    }}/>
                            </View>
                        </ScrollView>

                    </Modal>

                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
});

const styles = StyleSheet.create({})

export default Register;