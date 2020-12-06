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
  companyDetail(postBody) {
    console.log('company/detail postBody', postBody);
    return new Promise((resolve, reject) => {
        request.post('company/detail', postBody).then((response) => {
            console.log('company/detail response', response);
            resolve(response);
        }).catch((error) => {
            console.log('company/detail error', error);
            reject(error);
        });
  
    });
  }

  updateCompanyDetail(postBody) {
    return new Promise((resolve, reject) => {
        request.post('company/update', postBody).then((response) => {
            console.log('company/update response', response);
            resolve(response);
        }).catch((error) => {
            console.log('company/update error', error);
            reject(error);
        });
  
    });
  }
}

const firmRequests = new FirmRequests();
export default firmRequests;
