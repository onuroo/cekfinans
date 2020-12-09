import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import request from "../config/request";

import FirmRequests from '../requests/firm.requests';
import { emailValidation } from '../helpers/utils';

import NavigationActions from '../navigation/navigationActions';

const FirmHooks = () => {
  
//   const [token, setToken] = useState(null);
//   const [sector, setSector] = useState(null);
//   const [company_vkn, setCompany_vkn] = useState(null);
//   const [company_title, setCompany_title] = useState(null);
//   const [company_tax_office, setCompany_tax_office] = useState(null);
//   const [company_phone, setCompany_phone] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [company_website, setCompany_website] = useState(null);
//   const [company_address_city, setCompany_address_city] = useState(null);
//   const [company_address_district, setCompany_address_district] = useState(null);
//   const [company_address_neighborhood, setCompany_address_neighborhood] = useState(null);
//   const [company_address_street, setCompany_address_street] = useState(null);
//   const [company_address_door_no, setCompany_address_door_no] = useState(null);
//   const [company_address_apartment_no, setCompany_address_apartment_no] = useState(null);
//   const [company_official_title, setCompany_official_title] = useState(null);

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const [form, setForm] = useState({
    token: null,
    sector: null,
    company_vkn: null,
    company_title: null,
    company_tax_office: null,
    company_phone: null,
    email: null,
    company_website: null,
    company_address_city: null,
    company_address_district: null,
    company_address_neighborhood: null,
    company_address_street: null,
    company_address_door_no: null,
    company_address_apartment_no: null,
    company_official_title: null,
    company_official_email: null,
    company_official_name: null,
    company_official_phone: null,
    company_official_tckn: null,
  });

  const handleFormInputs = (key, value) => {
      console.log('2222', { ...form, [key]: value});
    setForm({ ...form, [key]: value});
  }

  const getFormItem = (key) => {
    return form[key]
    // if (typeof form[key] === "string") {
    //   return JSON.parse(form[key]);
    // } else {
    //   return form[key]
    // }
  }

  const { navigatePush, openLoading, closeLoading, navigatePop, navigateReset } = NavigationActions();
  
  const getCities = async () => {
    await request.post('common/cities').then(res => {
        setCities(res.city);
    })
  }

  const getDistrict = async (val) => {
    await request.post('common/district',{ id: val.id }).then(res => {
        setDistricts(res.district)
    })
  }

  const getNeighborhood = async (val) => {
    await request.post('common/neighborhood',{ id: val.id }).then(res => {
        setNeighborhoods(res.neighborhood)
    })
  }

  const setSelectedCity = (val) => {
    setForm({ ...form, company_address_city: val, company_address_district: null, company_address_neighborhood: null})
    setDistricts([]);
    setNeighborhoods([]);
    getDistrict(val);
  }

  const setSelectedDistrict = (val) => {
    setForm({ ...form, company_address_district: val, company_address_neighborhood: null})
    setNeighborhoods([]);
    getNeighborhood(val)
  }

  const setSelectedNeighborhood = (val) => {
    handleFormInputs('company_address_neighborhood', val);
  }

  const isValidated = (isUpdate = false) => {

    const {
        token,
        sector,
        company_vkn,
        company_title,
        company_tax_office,
        company_phone,
        email,
        company_website,
        company_address_city,
        company_address_district,
        company_address_neighborhood,
        company_address_street,
        company_address_door_no,
        company_address_apartment_no,
        company_official_title,
        company_official_email,
        company_official_name,
        company_official_phone,
        company_official_tckn,
    } = form;
    const rules = [
        token,
        sector,
        company_vkn,
        company_title,
        company_tax_office,
        company_phone,
        (company_phone && company_phone.length > 9),
        email,
        company_website,
        company_address_city,
        company_address_district,
        company_address_neighborhood,
        company_address_street,
        company_address_door_no,
        company_address_apartment_no,
        company_official_title,
    ];
    if (isUpdate) {
      rules.push((company_official_email && emailValidation(company_official_email)))
      rules.push(company_official_name)
      rules.push(company_official_phone)
      rules.push(company_official_tckn)
      rules.push(company_official_title)
    }
    return rules.every(i => i);
  }

  const getValidationError = () => {
    const {
        token,
        sector,
        company_vkn,
        company_title,
        company_tax_office,
        company_phone,
        email,
        company_website,
        company_address_city,
        company_address_district,
        company_address_neighborhood,
        company_address_street,
        company_address_door_no,
        company_address_apartment_no,
        company_official_title,
        company_official_email,
        company_official_name,
        company_official_phone,
        company_official_tckn,
    } = form;

    if (!token) return 'token bilgisi boş bırakılamaz!';
    if (!sector) return 'Sektör bilgisi boş bırakılamaz!';
    if (!company_vkn) return 'Firma vkn bilgisi boş bırakılamaz!';
    if (!company_title) return 'Firma ünvanı bilgisi boş bırakılamaz!';
    if (!company_tax_office) return 'Vergi dairesi bilgisi boş bırakılamaz!';
    if (!company_phone) return 'Telefon bilgisi boş bırakılamaz!';
    if (!(company_phone && company_phone.length > 9)) return 'Telefon bilgisi 10 hane olmamalı!';
    if (!email) return 'E-posta adresi bilgisi boş bırakılamaz!';
    if (email && !emailValidation(email)) return 'E-posta adresi bilgisi uygun değil!';
    if (!company_website) return 'Website bilgisi boş bırakılamaz!';
    if (!company_address_city) return 'Şehir bilgisi boş bırakılamaz!';
    if (!company_address_district) return 'İlçe bilgisi boş bırakılamaz!';
    if (!company_address_neighborhood) return 'Mahalle bilgisi boş bırakılamaz!';
    if (!company_address_street) return 'Cadde/sokak bilgisi boş bırakılamaz!';
    if (!company_address_door_no) return 'Kapı no bilgisi boş bırakılamaz!';
    if (!company_address_apartment_no) return 'Daire no bilgisi boş bırakılamaz!';
    if (!company_official_title) return 'Firma yetkilisi ünvanı bilgisi boş bırakılamaz!';

    if (isUpdate) {
      if (!company_official_email) return 'Firma yetkilisi e-posta adresi boş bırakılamaz!';
      if (company_official_email && !emailValidation(company_official_email)) return 'Firma yetkilisi E-posta adresi uygun değil!';
      if (!company_official_name) return 'Firma yetkilisi isim bilgisi boş bırakılamaz!';
      if (!company_official_phone) return 'Firma yetkilisi telefon bilgisi boş bırakılamaz!';
      if (!company_official_tckn) return 'Firma yetkilisi kimlik no bilgisi boş bırakılamaz!';
      if (!company_official_title) return 'Firma yetkilisi ünvanı bilgisi boş bırakılamaz!';
    }
    else return null;
  }


  const companyRegister = () => {
    console.log('form', form);
    console.log('isValidated()', isValidated());
    if (isValidated()) {
        openLoading();
        const postBody = {
            ...form,
            company_phone: `0${form.company_phone}`
        };
        if (global.token) {
          postBody.token = global.token;
        }
        FirmRequests.companyRegister(postBody).then((response) => {
            console.log('hook response', response);
            AsyncStorage.getItem('userInfo').then((userInfo) => {
              if (userInfo) {
                const new_info = {...JSON.parse(userInfo), companyInfo: true };
                AsyncStorage.setItem('userInfo', JSON.stringify(new_info));
                global.token = JSON.parse(userInfo).token;
              }
            });

            closeLoading();
            navigateReset('home');
        }).catch((error) => {
            console.log('hook error', error);
            closeLoading();
            const { message } = error;
            navigatePush('errorModal', { message });
        });
    } else {
        navigatePush('errorModal', { message: getValidationError() });
    }
  }

  const getCompanyDetail = () => {
    console.log('global', global);
    const { token } = global;
    const postBody = {
      token,
    };
    FirmRequests.companyDetail(postBody).then((response) => {
      console.log('companyDetail response', response);
      if (response) {
        const { company } = response;
        if (company) {
            const object = company;
            const form_object = {}
            Object.keys(object).forEach((key) => {
              console.log('company[key]', object[key], key);
              if (object[key]) {
                if (key === 'company_address_city' ||
                  key === 'company_address_district' ||
                  key === 'company_address_neighborhood') {
                    form_object[key] = JSON.parse(object[key]);
                  } else {
                    form_object[key] = object[key].toString();
                  }
              } else form_object[key] = null;
            })
            console.log('form_object', form_object);
            setForm({...form, ...form_object, token});
            setIsUpdate(true);
        }
      }
    }).catch((error) => {
      console.log('companyDetail error', error);
    });
  };

  const updateCompanyDetail = () => {
    if (isValidated(true)) {
      openLoading();
      console.log('updateCompanyDetail form', form);
      FirmRequests.updateCompanyDetail(form).then((response) => {
        const { message } = response;
        closeLoading();
        navigatePush('successModal', { message });
        console.log('updateCompanyDetail response', response);
      }).catch((error) => {
        closeLoading();
        console.log('updateCompanyDetail error', error);
      });
    } else {
      navigatePush('errorModal', { message: getValidationError(true) });
    }
    
  }

  return {
    isUpdate,
    handleFormInputs,
    getFormItem,
    getCities,
    setSelectedCity,
    setSelectedDistrict,
    setSelectedNeighborhood,
    cities,
    districts,
    neighborhoods,
    companyRegister,
    getCompanyDetail,
    updateCompanyDetail,
  };
};

export default FirmHooks;
