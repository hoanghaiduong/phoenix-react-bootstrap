import React, { useState } from 'react';
import { Form, Input, Button, Switch, Upload, message, Modal } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

const Step2Form = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [fileListBusinessRegImages, setFileListBusinessRegImages] = useState([])
  const [fileListTaxCodeImages, setFileListTaxCodeImages] = useState([])
  const [fileListRelatedImages, setFileListRelatedImages] = useState([])
  const [imageUrlFront, setImageUrlFront] = useState(null);
  const [imageUrlBack, setImageUrlBack] = useState(null);
  const onFinish = (values) => {
    console.log(values);
    const registerType = values.isActived || true;
    const anotherPhoneNumber = values.anotherPhoneNumber || null;
    var submitValues = {
        ...values,
        idCard: [
            values.idCardF,
            values.idCardS
        ],
        registerType: registerType,
        anotherPhoneNumber: anotherPhoneNumber
    }
    delete submitValues.idCardF;
    delete submitValues.idCardS;
    onSubmit(submitValues);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  // UPLOAD
  const uploadPropsFirst = {
    name: 'idCardF',
    listType: 'picture-card',
    className: 'avatar-uploader',
    showUploadList: false,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange: (info) => handleChange(info, true),
  };
  const uploadPropsBack = {
    name: 'idCardS',
    listType: 'picture-card',
    className: 'avatar-uploader',
    showUploadList: false,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange: (info) => handleChange(info, false),
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  
  const handleChange = (info, isFront) => {
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      if (isFront) {
        setImageUrlFront(imageUrl);
      } else {
        setImageUrlBack(imageUrl);
      }
  };
  const uploadButton = (
    <div>
      {<PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const handleChangeListBusinessRegImages = ({ fileList: newFileList }) => setFileListBusinessRegImages(newFileList);
  const handleChangeListTaxCodeImages = ({ fileList: newFileList }) => setFileListTaxCodeImages(newFileList);
  const handleChangeListRelatedImages = ({ fileList: newFileList }) => setFileListRelatedImages(newFileList);
  const handlePreview = async (file) => {
    // if (!file.url && !file.preview) {
    //   file.preview = await getBase64(file.originFileObj);
    // }
    // setPreviewImage(file.url || file.preview);
    // setPreviewOpen(true);
    // setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  return (
    <>
    <Form form={form} onFinish={onFinish} layout="vertical" >
        <h3>Thông tin người đại diện</h3>
        <p style={{color:'lightgray'}}>Vui lòng điền đúng thông tin theo như hợp đồng</p>
      <Form.Item name="registerType" label="Đăng ký dưới danh nghĩa" valuePropName="checked">
      <Switch checkedChildren="Cá nhân" unCheckedChildren="Công ty/chuỗi" defaultChecked />
      </Form.Item>
      <Form.Item name="name" label="Tên đầy đủ người đại diện" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item name="phoneNumber" label="Số Điện thoại" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="anotherPhoneNumber" label="Số Điện thoại Khác">
        <Input />
      </Form.Item>
      <Form.Item
        name="idCard"
        label="Chứng minh nhân dân"
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Ảnh chụp mặt trước CMND</span>
        <Form.Item
        name="idCardF"
        rules={[{ required: true, message: 'Vui lòng chọn ảnh chụp mặt trước CMND' }]}
        // label="Ảnh chụp mặt trước CMND"
      >
          
          <Upload {...uploadPropsFirst}>
            {imageUrlFront ? (
              <img src={imageUrlFront} alt="idCardFront" style={{ width: '100%', height: 'auto' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <span>Ảnh chụp mặt sau CMND</span>
        <Form.Item
        name="idCardS"
        // label="Ảnh chụp mặt sau CMND"
        rules={[{ required: true, message: 'Vui lòng chọn ảnh chụp mặt sau CMND' }]}
      >
          <Upload {...uploadPropsBack}>
            {imageUrlBack ? (
              <img src={imageUrlBack} alt="idCardBack" style={{ width: '100%', height: 'auto' }} />
            ) : (
              uploadButton
            )}
          </Upload>

      </Form.Item>
        </div>
      </Form.Item>
      <Form.Item name="businessRegImages" label="Hình ảnh Đăng ký Doanh nghiệp" valuePropName="fileList" getValueFromEvent={normFile} rules={[{ required: true, message: 'Vui lòng chọn ảnh Đăng ký Doanh nghiệp' }]}>
        <Upload 
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileListBusinessRegImages}
            onPreview={handlePreview}
            onChange={handleChangeListBusinessRegImages}>
            {fileListBusinessRegImages.length >= 10 ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item name="taxCode" label="Mã số thuế" rules={[{ required: true, message: 'Vui lòng nhập mã số thuế' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="taxCodeImages" label="Hình ảnh Mã số thuế" valuePropName="fileList" getValueFromEvent={normFile} rules={[{ required: true, message: 'Vui lòng chọn ảnh Mã số thuế' }]}>
      <Upload 
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileListTaxCodeImages}
            onPreview={handlePreview}
            onChange={handleChangeListTaxCodeImages}>
            {fileListTaxCodeImages.length >= 1 ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item name="relatedImages" label="Hình ảnh liên quan" valuePropName="fileList" getValueFromEvent={normFile} rules={[{ required: true, message: 'Vui lòng chọn ảnh liên quan' }]}>
      <Upload 
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileListRelatedImages}
            onPreview={handlePreview}
            onChange={handleChangeListRelatedImages}>
            {fileListRelatedImages.length >= 6 ? null : uploadButton}
        </Upload>
        
      </Form.Item>
      <Form.Item name="companyName" label="Tên Công ty" rules={[{ required: true, message: 'Vui lòng nhập tên công ty' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="companyAddress" label="Địa chỉ Công ty" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ công ty' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="fullNameOfRepresentative" label="Họ và Tên người đại diện" rules={[{ required: true, message: 'Vui lòng nhập họ và tên người đại diện' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Tiếp theo
        </Button>
      </Form.Item>
    </Form>
      </>
  );
};

export default Step2Form;
