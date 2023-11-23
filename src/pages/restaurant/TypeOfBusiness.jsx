import axios from 'axios';
import React, { useEffect } from 'react'
import { API_PATH } from '../authentication/ApiPath';
import { useSelector } from 'react-redux';
import NavbarDefault from '../../components/Navbars/NavbarDefault';

function TypeOfBusiness() {
    const {userInfo} = useSelector(state => state)
    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${API_PATH}/api/business-model/gets?order=ASC&page=1&take=10`,
            headers: { 
                'accept': '*/*', 
                'Authorization': `Bearer ${userInfo.accessToken}`
            }
        };

        axios.request(config)
        .then((response) => {
        console.log(response.data.data);
        })
        .catch((error) => {
        console.log(error);
        });

    },[])
  return (
    <>
    <NavbarDefault/>
    
    
                
    </>
  )
}

export default TypeOfBusiness