import React from 'react'
import {View, StyleSheet,TouchableOpacity} from 'react-native'
import {color} from "../../components/ThemeConfig";
import {Icon, Text} from "../../components";
import moment from "moment";
import NavigationActions from '../../navigation/navigationActions';

const ListItem = ({data}) => {
    const { navigatePush } = NavigationActions();
    return (
        <View
            style={[styles.rowFront]}>
            <View style={styles.row}>
                <Text>{moment(data.created_at).format('DD-MM-YYYY')}</Text>
                <Text>Yurtiçi Faktoring</Text>
            </View>
            <View style={[styles.row, {
                borderTopWidth: 1,
                borderColor: color.gray,
                paddingTop: 10,
            }]}>
                <View>
                    <Text right>Çek No</Text>
                    <Text bold>{data.check_number}</Text>

                </View>
                <View>
                    <Text right>Çek Tarihi</Text>
                    <Text bold>{moment(data.check_date, "YYYY-MM-DD").format('DD-MM-YYYY')}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                {console.log(data)}
                {data.check_bid_status === 0 &&
                <TouchableOpacity onPress={()=> navigatePush('listDetail',{data:data})} style={styles.bottom}>
                    <Text center h6 color={color.white}> Çek Detay</Text>
                    <Icon size={22} color={color.white} name={'chevron-right'}/>
                    </TouchableOpacity>
                }
                {data.check_bid_status === 1 &&
                <View style={[styles.bottom,{backgroundColor:color.turkuaz}]}>
                    <Text center h6 color={color.white}> Teklif Var</Text>
                    <Icon size={22} color={color.white} name={'chevron-right'}/>
                </View>
                }
                {data.check_bid_status === 2 &&
                <View style={[styles.bottom,{backgroundColor:color.theme}]}>
                    <Text center h6 color={color.white}> Teklif Kabul Edilmiş</Text>
                    <Icon size={22} color={color.white} name={'chevron-right'}/>
                </View>
                }
                <View style={[styles.bottom, {
                    backgroundColor: color.gray,
                    justifyContent: 'flex-end',
                }]}>
                    <Text style={{textAlign: 'right'}} h5 bold> {data.check_total} TL</Text>
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