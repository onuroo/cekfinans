import axios from 'axios';
import configApi from '../config';

class CheckRequests {
    CheckRegister(FormData) {
        axios.post(`${configApi.API_ENDPOINT}check/register`, FormData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            },
        }).then((res) => console.log(res)).catch(e => console.log(e))
    }
}

const checkRequests = new CheckRequests();
export default checkRequests;
