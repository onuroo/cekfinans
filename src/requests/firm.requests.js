import request from '../config/request';

class FirmRequests {
  companyRegister(postBody) {
    return new Promise((resolve, reject) => {
        request.post('company/register', postBody).then((response) => {
            console.log('company/register response', response);
            resolve(response);
        }).catch((error) => {
            console.log('company/register error', error);
            reject(error);
        });
  
    });
  }

}

const firmRequests = new FirmRequests();
export default firmRequests;
