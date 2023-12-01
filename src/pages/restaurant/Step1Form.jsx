import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Switch } from 'antd';
import { API_PATH } from '../authentication/ApiPath';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { Option } = Select;
const initialDataLocation = {
  province: [],
  district: [],
  ward: [],
};
const Step1Form = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const { userInfo } = useSelector(state => state)
  const [businessTypes, setBusinessTypes] = useState([])
  
  const [dataLocation, setDataLocation] = useState(initialDataLocation);

  const onFinish = (values) => {
    console.log(values);
    onSubmit(values);
  };
  useEffect(() => {
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
        var tempData = []
        response.data.data.map((data)=>{
            tempData.push({
            value : data.id ,
            label : data.name
        })
    })
        setBusinessTypes(tempData)
    })
      .catch((error) => {
        console.log(error);
      });

  }, [])
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleLocationChange = (name, value) => {
    if (name == 'district') {
      setDataLocation({
        ...dataLocation,
        [name]: value,
        ward: []
      });
    }
    else
    {
      setDataLocation({
        ...dataLocation,
        [name]: value,
      });
    }
  };
  const handleInputLocationChange = (name, value) => {
    if (name == 'province') {
      getDistricts(value)
      
    }
    else if (name == 'district') {
      getWards(value)
    }
  };
  const getDistricts = (provinceCode) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/district/getDistrictByProvinceId?province_code=${provinceCode}&order=ASC&page=1&take=500`,
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${userInfo.accessToken}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.data);
        handleLocationChange("district", response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  const getWards = (districtCode) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/ward/district/ward?district_code=${districtCode}&order=ASC&page=1&take=500`,
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${userInfo.accessToken}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        handleLocationChange("ward", response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/province/getListProvince?order=ASC&page=1&take=500`,
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${userInfo.accessToken}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.data);
        handleLocationChange("province", response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <h3>Thông tin cơ bản</h3>
        <Form.Item name="businessModelId" label="Loại hình kinh doanh" rules={[{ required: true, message: 'Vui lòng nhập ID Mô hình kinh doanh' }]}>
        <Select
            defaultValue="-- Chọn loại hình doanh nghiệp --"
            style={{ width: "100%" }}
            onChange={handleChange}
            options={businessTypes}
            size='large'
            />
      </Form.Item>
      <div style={{display:'flex', width:'100%'}}>
        <Form.Item name="name" label="Tên" rules={[{ required: true, message: 'Vui lòng nhập tên' }]} style={{width: '100%'}}>
            <Input size='large' />
        </Form.Item>
        <span>&nbsp;&nbsp;</span>
        <Form.Item name="type" label="Loại" rules={[{ required: true, message: 'Vui lòng nhập loại' }]} style={{width: '100%'}}>
            <Input size='large'/>
        </Form.Item>
        <span>&nbsp;&nbsp;</span>
        <Form.Item name="street" label="Đường" rules={[{ required: true, message: 'Vui lòng nhập đường' }]}   style={{width: '100%'}}>
            <Input size='large' />
        </Form.Item>
      </div>
      <Form.Item name="phone" label="Điện thoại" rules={[{ required: true, message: 'Vui lòng nhập điện thoại' }]}>
        <Input size='large' />
      </Form.Item>
      <div style={{display:'flex', width:'100%'}}>
      <Form.Item name="province" label="Tỉnh/Thành phố" rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố' }]} style={{width: '100%'}}>
        <Select
          name="province"
          onChange={(e, option)=>handleInputLocationChange("province", option.key)}
          defaultValue="-- Chọn tỉnh thành --"
          size='large'
        >
          {dataLocation.province.map((province) => (
            <Option key={province.code} value={province.fullName}>
              {province.name}
            </Option>
          ))}
      </Select>
      </Form.Item>
      <span>&nbsp;&nbsp;</span>
      <Form.Item name="district" label="Quận/Huyện" rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]} style={{width: '100%'}}>
        <Select
            name="district"
            onChange={(e, option)=>handleInputLocationChange("district", option.key)}
            defaultValue="-- Chọn Huyện --"
            size='large'
          >
            {dataLocation.district.map((district) => (
              <Option key={district.code} value={district.fullName}>
                {district.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <span>&nbsp;&nbsp;</span>
      <Form.Item name="ward" label="Phường/Xã" rules={[{ required: true, message: 'Vui lòng chọn phường/xã' }]} style={{width: '100%'}}>
        <Select
              name="ward"
              onChange={(e, option)=>handleInputLocationChange("ward", option.key)}
              defaultValue="-- Chọn Phường --"
              size='large'
            >
              {dataLocation.ward.map((ward) => (
                <Option key={ward.code} value={ward.fullName}>
                  {ward.name}
                </Option>
              ))}
          </Select>
      </Form.Item>
      </div>
      {/* <Form.Item name="houseNumber" label="Số nhà" rules={[{ required: true, message: 'Vui lòng nhập số nhà' }]}>
        <Input size='large' />
      </Form.Item> */}
      
      {/* <Form.Item name="statusGranted" label="Trạng thái được cấp" rules={[{ required: true, message: 'Vui lòng nhập trạng thái được cấp' }]}>
        <Input size='large' />
      </Form.Item> */}
      {/* <Form.Item name="disabled" label="Vô hiệu hóa" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Tiếp theo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Step1Form;
