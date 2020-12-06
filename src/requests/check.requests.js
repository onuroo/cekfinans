import axios from 'axios';
import configApi from '../config';
import request from "../config/request";
import NavigationActions from "../navigation/navigationActions";

class CheckRequests {
    CheckRegister(FormData) {
        return new Promise((resolve, reject) => {
            axios.post(`${configApi.API_ENDPOINT}check/register`, FormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            }).then((res) => {
                console.log(res)
                resolve(res.data)
            }).catch(e => reject(e))
        })
    }
}

const checkRequests = new CheckRequests();
export default checkRequests;
