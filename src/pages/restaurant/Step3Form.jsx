import React, { useEffect, useState } from 'react';
import { Form, Input, Switch, TimePicker, Button, Upload, message, Select } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { API_PATH } from '../authentication/ApiPath';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { Option } = Select;

const Step3Form = ({ onSubmit }) => {
    const { userInfo } = useSelector(state => state)
  const [form] = Form.useForm();
  const [typeOfServiceIds, setTypeOfServiceIds] = useState([])

  const onFinish = (values) => {
    console.log(values);
    // Thêm logic xử lý khi nút Gửi được nhấp
    onSubmit(values);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Chỉ có thể tải lên tệp hình ảnh!');
      }
      return isImage;
    },
  };
  useEffect(()=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${API_PATH}/api/type-of-service/gets?order=ASC&page=1&take=50`,
        headers: { 
          'accept': '*/*', 
          'Authorization': `Bearer ${userInfo.accessToken}`
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response.data.data);
        setTypeOfServiceIds(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
      
  },[])

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      {/* Bước 3: Thông tin thời gian mở cửa */}
      <h3>Thông tin quán - Chi Tiết</h3>
      {['sundayd', 'mondayd', 'tuesdayd', 'wednesdayd', 'thursdayd', 'fridayd', 'saturdayd'].map((day) => (
        <Form.Item key={day} label={`${day.charAt(0).toUpperCase()}${day.slice(1)}`} name={day}>
            <Switch name={[day, 'isOpen']} style={{ margin: '0 15px' }} defaultChecked />
            <span style={{ margin: '0 11px' }}>Mở cửa: </span>

            <TimePicker.RangePicker
            format="HH:mm:ss"
            placeholder={['Thời gian bắt đầu', 'Thời gian kết thúc']}
            name={[day, 'timeSlots', 0, 'morning']}
            />

            {/* <TimePicker.RangePicker
            format="HH:mm:ss"
            placeholder={['Thời gian bắt đầu', 'Thời gian kết thúc']}
            name={[day, 'timeSlots', 0, 'afternoon']}
            style={{ marginLeft: 10 }}
            />

            <TimePicker.RangePicker
            format="HH:mm:ss"
            placeholder={['Thời gian bắt đầu', 'Thời gian kết thúc']}
            name={[day, 'timeSlots', 0, 'evening']}
            style={{ marginLeft: 10 }}
            /> */}
        </Form.Item>
        ))}

      {/* Các trường khác */}
      <Form.Item name="keyword_search" label="Từ khóa tìm kiếm" rules={[{ required: true, message: 'Vui lòng nhập từ khóa tìm kiếm' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="descriptions" label="Mô tả" rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="avatar" label="Ảnh đại diện" valuePropName="fileList" getValueFromEvent={normFile}rules={[{ required: true, message: 'Vui lòng nhập ảnh đại diện' }]}>
        <Upload {...uploadProps} maxCount={1} listType="picture">
          <Button icon={<UploadOutlined />}>Tải ảnh đại diện lên</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="coverImage" label="Ảnh bìa" valuePropName="fileList" getValueFromEvent={normFile}rules={[{ required: true, message: 'Vui lòng nhập ảnh bìa' }]}>
        <Upload {...uploadProps} maxCount={1} listType="picture">
          <Button icon={<UploadOutlined />}>Tải ảnh bìa lên</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="facadeImage" label="Ảnh mặt tiền" valuePropName="fileList" getValueFromEvent={normFile}rules={[{ required: true, message: 'Vui lòng nhập ảnh mặt tiền' }]}>
        <Upload {...uploadProps} maxCount={1} listType="picture">
          <Button icon={<UploadOutlined />}>Tải ảnh mặt tiền lên</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="menuImages" label="Ảnh menu" valuePropName="fileList" getValueFromEvent={normFile}rules={[{ required: true, message: 'Vui lòng nhập ảnh menu' }]}>
        <Upload {...uploadProps} maxCount={1} listType="picture">
          <Button icon={<UploadOutlined />}>Tải ảnh menu lên</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="typeOfServiceIds" label="Danh sách loại dịch vụ" rules={[{ required: true, message: 'Vui lòng chọn danh sách loại dịch vụ' }]}>
      <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
      }}
      placeholder="Thêm loại dịch vụ"
      defaultValue={[]}
    //   onChange={handleChange}
      options={
        typeOfServiceIds.map((type)=>{
            return(
                {
                    value: type.id,
                    label: type.name
                }
            )
        })
      }
    />
      </Form.Item>

      {/* Nút Gửi */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Step3Form;
