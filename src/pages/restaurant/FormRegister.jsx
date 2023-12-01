import React, { useState } from 'react';
import { Button, Card, message, Steps, theme } from 'antd';
import { API_PATH } from '../authentication/ApiPath';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import Step4Form from './Step4Form';
import axios from 'axios';
import { useSelector } from 'react-redux';



function FormRegister() {
  
  const [steps, setSteps] = useState([
    {
      title: 'Thông tin quán - cơ bản',
      content: 'First-content',
      apiData: {
          name: '',
          type: '',
          street: '',
          phone: '',
          province: '',
          district: '',
          ward: '',
          houseNumber: '',
          location: {},
          statusGranted: 0,
          disabled: false,
          businessModelId: '',
      },
    },
    {
      title: 'Thông tin người đại diện',
      content: 'Second-content',
      apiData: {
          registerType: false,
          name: '',
          email: '',
          phoneNumber: '',
          anotherPhoneNumber: '',
          idCard: [],
          businessRegImages: [],
          taxCode: '',
          taxCodeImages: [],
          relatedImages: [],
          companyName: '',
          companyAddress: '',
          fullNameOfRepresentative: '',
      },
    },
    {
      title: 'Thông tin quán - chi tiết',
      content: 'Third-content',
      apiData: {
        sunday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
        monday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
        tuesday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
        wednesday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
        thursday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
        friday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
        saturday: {
          isOpen: true,
          timeSlots: [
            {
              morning: {
                startTime: "08:00:00",
                endTime: "09:00:00"
              },
              afternoon: {
                startTime: "12:00:00",
                endTime: "13:00:00"
              },
              evening: {
                startTime: "18:00:00",
                endTime: "19:00:00"
              }
            }
          ]
        },
          keyword_search: "",
          descriptions: "",
          avatar: null, 
          coverImage: null,
          facadeImage: null, 
          menuImages: [], 
          typeOfServiceIds: [] 
        
      },
    },
    {
      title: 'Hoàn thành',
      content: 'Last-content',
      apiData: {
        // Define your API data for step 4 here
      },
    },
  ])
  const { userInfo } = useSelector(state => state)
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const next = async (formData) => {
    try {
      const updatedApiData = { ...steps[current].apiData, ...formData };
      
    //   const response = await postDataToApi(updatedApiData);
    //   console.log('API Response:', response);
        console.log(updatedApiData)
        console.log(steps)
        if(current == 3)
        {
          postDataStep1(steps[0].apiData)
        }
        else
        {
          const updatedSteps = [...steps];
          updatedSteps[current].apiData = updatedApiData;

          // Update the state with the new array
          setSteps(updatedSteps);
          setCurrent(current + 1);
        }
    } catch (error) {
      console.error('Error posting data to API:', error);
      message.error('Failed to submit data. Please try again.');
    }
  };

  const postDataToApi = async (data) => {
    // Implement your API post logic here
    const apiUrl = API_PATH;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to post data. Status: ${response.status}`);
    }

    return response.json();
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const postDataStep1 = (data) => {

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/restaurant/create`,
      headers: { 
        'accept': '*/*', 
        'Authorization': `Bearer ${userInfo.accessToken}`,
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(data)
    };

    axios.request(config)
    .then((response) => {
      console.log(response.data);
      postDataStep2(response.data.id, steps[1].apiData)
    })
    .catch((error) => {
      console.log(error);
    });

  }

  const postDataStep2 = (id , data)=>{
    const apiUrl = `${API_PATH}/api/representative-information?restaurantId=${id}`;

    const formData = new FormData();
    data.relatedImages.forEach((image)=>formData.append('relatedImages', image.originFileObj))
    data.businessRegImages.forEach((image)=>formData.append('businessRegImages', image.originFileObj))
    // formData.append('relatedImages', data.relatedImages);
    // formData.append('businessRegImages', data.businessRegImages);
    formData.append('taxCodeImages', data.taxCodeImages[0].originFileObj);
    formData.append('idCard', data.idCard[0].file.originFileObj);
    formData.append('idCard', data.idCard[1].file.originFileObj);
    formData.append('companyName', data.companyName);
    formData.append('name', data.name);
    formData.append('fullNameOfRepresentative', data.fullNameOfRepresentative);
    formData.append('anotherPhoneNumber', data.anotherPhoneNumber);
    formData.append('companyAddress', data.companyAddress);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('taxCode', data.taxCode);
    formData.append('email', data.email);
    formData.append('registerType', data.registerType);

    axios.post(apiUrl, formData, {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${userInfo.accessToken}`,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": formData
      },
    })
      .then(response => {
        // Handle the response
        console.log(response.data);
        postDataStep3(id, steps[2].apiData)
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });

  }
  const postDataStep3 = (id, data) => {
    var form = new FormData();
    form.append("facadeImage", data.facadeImage[0].originFileObj);
    form.append("menuImages", data.menuImages[0].originFileObj);
    form.append("coverImage", data.coverImage[0].originFileObj);
    form.append("tuesday", JSON.stringify(data.tuesday));
    form.append("monday", JSON.stringify(data.monday));
    form.append("sunday", JSON.stringify(data.sunday));
    form.append("wednesday",JSON.stringify( data.wednesday));
    form.append("saturday", JSON.stringify(data.saturday));
    form.append("thursday", JSON.stringify(data.thursday));
    form.append("friday", JSON.stringify(data.friday));
    form.append("typeOfServiceIds", data.typeOfServiceIds);
    form.append("descriptions", data.descriptions);
    form.append("restaurantId", id);
    form.append("avatar", data.avatar[0].originFileObj);
    form.append("keyword_search", data.keyword_search);

    var settings = {
      "url": `${API_PATH}/api/detail-information/create`,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "accept": "*/*",
        "Authorization": `Bearer ${userInfo.accessToken}`
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    axios.request(settings)
    .then((response) => {
      window.location.href = '/restaurant/management';
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Card
        style={{
          margin: 100,
          marginLeft: 200,
          marginRight: 200
        }}
      >
        <Steps current={current} items={items}  style={{marginBottom: 40}}/>
        {current === 0 && <Step1Form onSubmit={next} />}
        {current === 1 && <Step2Form onSubmit={next} />}
        {current === 2 && <Step3Form onSubmit={next} />}
        {current === 3 && <Step4Form onSubmit={next} />}
      </Card>
    </>
  );
}

export default FormRegister;
