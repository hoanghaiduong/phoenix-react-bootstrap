import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';

function Contact() {
    useEffect(()=>{
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://116.118.49.43:5229/api/CulturaPerfomance',
        headers: { 
            'accept': '*/*'
        }
        };

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });

    },[])
    return (
        <div>Contact</div>
    )
}

export default Contact