import request from '../config/request';

class AuthRequests {
  userRegister(queryParams) {
    return new Promise((resolve, reject) => {
        request.post(`user/register${queryParams}`).then((response) => {
            console.log('register response', response);
            resolve(response);
        }).catch((error) => {
            console.log('register error', error);
            reject(error);
        });
  
    });
  }
//   {{url}}/api/user/registerControl?token=CLbiR0IO4ahGW3LdEyaWemF4bwSaqnmK&code=736357
  userRegisterControl(queryParams) {
    return new Promise((resolve, reject) => {
        request.post(`user/registerControl${queryParams}`).then((response) => {
            console.log('registerControl response', response);
            resolve(response);
        }).catch((error) => {
            console.log('registerControl error', error);
            reject(error);
        });
  
    });
  }
  
  login(postBody) {
      return new Promise((resolve, reject) => {
        request.post('user/login', postBody).then((response) => {
            global.token = response.token;
            console.log('responseeeee', response);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
  
    });
  }

  passwordReset(postBody) {
      return new Promise((resolve, reject) => {
        request.post('user/resetPassword', postBody).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
  
    });
  }
  codeConfirm(postBody) {
      return new Promise((resolve, reject) => {
        request.post('user/codeConfirm', postBody).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
  
    });
  }
  passwordConfirm(postBody) {
      return new Promise((resolve, reject) => {
        request.post('user/passwordConfirm', postBody).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
  
    });
  }
}

const authRequests = new AuthRequests();
export default authRequests;
