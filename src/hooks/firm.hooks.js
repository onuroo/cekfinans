import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import request from "../config/request";

import FirmRequests from '../requests/firm.requests';

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
  });

  const handleFormInputs = (key, value) => {
      console.log('2222', { ...form, [key]: value});
    setForm({ ...form, [key]: value});
  }

  const getFormItem = (key) => {
    return form[key];
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

  const isValidated = () => {

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
    } = form;

    if (!token) return 'token bilgisi boş bırakılamaz!';
    if (!sector) return 'Sektör bilgisi boş bırakılamaz!';
    if (!company_vkn) return 'Firma vkn bilgisi boş bırakılamaz!';
    if (!company_title) return 'Firma ünvanı bilgisi boş bırakılamaz!';
    if (!company_tax_office) return 'Vergi dairesi bilgisi boş bırakılamaz!';
    if (!company_phone) return 'Telefon bilgisi boş bırakılamaz!';
    if (!(company_phone && company_phone.length > 9)) return 'Telefon bilgisi 10 hane olmamalı!';
    if (!email) return 'E-posta adresi bilgisi boş bırakılamaz!';
    if (!company_website) return 'Website bilgisi boş bırakılamaz!';
    if (!company_address_city) return 'Şehir bilgisi boş bırakılamaz!';
    if (!company_address_district) return 'İlçe bilgisi boş bırakılamaz!';
    if (!company_address_neighborhood) return 'Mahalle bilgisi boş bırakılamaz!';
    if (!company_address_street) return 'Cadde/sokak bilgisi boş bırakılamaz!';
    if (!company_address_door_no) return 'Kapı no bilgisi boş bırakılamaz!';
    if (!company_address_apartment_no) return 'Daire no bilgisi boş bırakılamaz!';
    if (!company_official_title) return 'Firma yetkilisi ünvanı bilgisi boş bırakılamaz!';
    else return null;
  }


  const onSubmit = () => {
    console.log('form', form);
    console.log('isValidated()', isValidated());
    if (isValidated()) {
        openLoading();
        const postBody = {
            ...form,
            company_phone: `0${form.company_phone}`
        };
        FirmRequests.companyRegister(postBody).then((response) => {
            console.log('hook response', response);
            closeLoading();
            navigateReset('home');
        }).catch((error) => {
            console.log('hook error', error);
            closeLoading();
        });
    } else {
        navigatePush('errorModal', { message: getValidationError() });
    }
  }

  return {
    handleFormInputs,
    getFormItem,
    getCities,
    setSelectedCity,
    setSelectedDistrict,
    setSelectedNeighborhood,
    cities,
    districts,
    neighborhoods,
    onSubmit
  };
};

export default FirmHooks;