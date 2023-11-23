import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_PATH } from '../authentication/ApiPath';
import { useSelector } from 'react-redux';
import NavbarDefault from '../../components/Navbars/NavbarDefault';
import { DatePicker, Select, Space, Switch, TimePicker } from 'antd';
const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

function BasicInfo() {
  const [type, setType] = useState('time');
  const [input, setInput] = useState(true);
  const initialData = {
    name: "",
    type: "",
    street: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    houseNumber: "",
    location: {},
    statusGranted: 0,
    disabled: false,
    businessModelId: "",
  };
  const initialDataLocation = {
    province: [],
    district: [],
    ward: [],
  };
  const [data, setData] = useState(initialData);
  const [dataLocation, setDataLocation] = useState(initialDataLocation);
  const [businessTypes, setBusinessTypes] = useState([])
  const [step, setStep] = useState(1)
  const { userInfo } = useSelector(state => state)
  console.log(data)
  console.log(dataLocation)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleInputLocationChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    var foundName = { fullName: "" }
    if (name == 'province') {
      getDistricts(value)
      foundName = dataLocation.province.find((obj) => obj.code === value);
      setData({
        ...data,
        ['district']: '',
        ['ward']: '',
        [name]: foundName.fullName,
      });
      document.getElementById('district-select').value = ''
      document.getElementById('ward-select').value = ''
    }
    else if (name == 'district') {
      getWards(value)
      foundName = dataLocation.district.find((obj) => obj.code === value);
      document.getElementById('ward-select').value = ''
      setData({
        ...data,
        ['ward']: '',
        [name]: foundName.fullName,
      });
      
    }
    else if (name == 'ward') {
      foundName = dataLocation.ward.find((obj) => obj.code === value);
      setData({
        ...data,
        [name]: foundName.fullName,
      });
    }
  };
  const handleLocationChange = (name, value) => {
    setDataLocation({
      ...dataLocation,
      [name]: value,
    });
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
        setBusinessTypes(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

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

  const postDataStep1 = () => {

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
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  }

  const handleClickNext = () => {
    
    if(step+1 <= 5)
    {
      document.getElementById(`step-${step}`).classList.add('done');
      if(step+1 < 5)
        document.getElementById(`step-${step+1}`).click()
      setStep(step+1)
    }
    switch(step)
    {
      case 1:
        postDataStep1()
        return
    }
  }

  return (
    <>
      <NavbarDefault />

      <div className="p-4 code-to-copy" id='wizard-box'>
        <div className="card theme-wizard mb-5" data-theme-wizard="data-theme-wizard">
          <div className="card-header bg-100 pt-3 border-bottom-0">
            <ul className="nav justify-content-between nav-wizard">
              <li className="nav-item"><a className="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="1" id='step-1' style={{pointerEvents: 'none'}} onClick={()=>{setStep(1)}}>
                <div className="text-center d-inline-block"><span className="nav-item-circle-parent"><span className="nav-item-circle"><span>1</span></span></span><span className="d-none d-md-block mt-1 fs--1" style={{position: 'absolute'}}>Thông tin quán - Cơ bản</span></div>
              </a></li>
              <li className="nav-item"><a className="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="2" id='step-2' style={{pointerEvents: 'none'}} onClick={()=>{setStep(2)}}>
                <div className="text-center d-inline-block"><span className="nav-item-circle-parent"><span className="nav-item-circle"><span>2</span></span></span><span className="d-none d-md-block mt-1 fs--1" style={{position: 'absolute', left: -54}}>Thông tin người đại diện</span></div>
              </a></li>
              <li className="nav-item"><a className="nav-link fw-semi-bold" href="#bootstrap-wizard-tab3" data-bs-toggle="tab" data-wizard-step="3" id='step-3' style={{pointerEvents: 'none'}} onClick={()=>{setStep(3)}}>
                <div className="text-center d-inline-block"><span className="nav-item-circle-parent"><span className="nav-item-circle"><span>3</span></span></span><span className="d-none d-md-block mt-1 fs--1" style={{position: 'absolute', left: -52}}>Thông tin quán - chi tiết</span></div>
              </a></li>
              <li className="nav-item"><a className="nav-link fw-semi-bold" href="#bootstrap-wizard-tab4" data-bs-toggle="tab" data-wizard-step="4" id='step-4' style={{pointerEvents: 'none'}} onClick={()=>{setStep(4)}}>
                <div className="text-center d-inline-block"><span className="nav-item-circle-parent"><span className="nav-item-circle"><span>4</span></span></span><span className="d-none d-md-block mt-1 fs--1" style={{position: 'absolute', left: -32}}>Hoàn thành</span></div>
              </a></li>
            </ul>
          </div>
          <div className="card-body pt-4 pb-0">
            <div className="tab-content">
              <div className="tab-pane active" role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
                <form id="wizardForm1" noValidate="novalidate" data-wizard-form="1">
                  <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Loại hình doanh nghiệp</label>
                    <select class="form-select" aria-label="Default select example" name="businessModelId" onChange={handleInputChange}>
                      <option selected disabled>-- Chọn loại hình doanh nghiệp --</option>
                      {
                        businessTypes.map((type) => {
                          return (<option key={type.id} value={type.id}>{type.name}</option>)
                        })
                      }
                    </select></div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-5">
                      <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Tên quán</label><input className="form-control" type="text" value={data.name} name="name" placeholder="Tên quán" id="bootstrap-wizard-wizard-name" onChange={handleInputChange} /></div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name"></label><input className="form-control" type="text" value={data.type} name="type" placeholder="Loại" id="bootstrap-wizard-wizard-name" onChange={handleInputChange} /></div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name"></label><input className="form-control" type="text" value={data.street} name="street" placeholder="Đường phố" id="bootstrap-wizard-wizard-name" onChange={handleInputChange} /></div>
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-4">
                      <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-phone">Số điện thoại</label><input className="form-control" type="number" value={data.phone} name="phone" placeholder="Số điện thoại" id="bootstrap-wizard-wizard-phone" onChange={handleInputChange} /></div>
                    </div></div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-4">
                      <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Tỉnh</label>
                        <select class="form-select" aria-label="Default select example" id='province-select' name="province" onChange={handleInputLocationChange}>
                          <option selected disabled value="">-- Chọn tỉnh thành --</option>
                          {
                            dataLocation.province.map((province) => {
                              return (<option key={province.code} value={province.code}>{province.name}</option>)
                            })
                          }
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Huyện</label>
                        <select class="form-select" aria-label="Default select example" id='district-select' name="district" onChange={handleInputLocationChange}>
                          <option selected disabled value="">-- Chọn Huyện --</option>
                          {
                            dataLocation.district.map((district) => {
                              return (<option key={district.code} value={district.code}>{district.name}</option>)
                            })
                          }
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Phường</label>
                        <select class="form-select" aria-label="Default select example" id='ward-select' name="ward" onChange={handleInputLocationChange}>
                          <option selected disabled value="">-- Chọn Phường --</option>
                          {
                            dataLocation.ward.map((ward) => {
                              return (<option key={ward.code} value={ward.code}>{ward.name}</option>)
                            })
                          }
                        </select>
                      </div>
                    </div>
                  </div>



                  {/* <div className="mb-2"><label className="form-label" htmlFor="bootstrap-wizard-wizard-email">Email*</label><input className="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" id="bootstrap-wizard-wizard-email" /></div>
                            <div className="row g-3 mb-3">
                              <div className="col-sm-6">
                                <div className="mb-2 mb-sm-0"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-password">Password*</label><input className="form-control" type="password" name="password" placeholder="Password" id="bootstrap-wizard-wizard-password" data-wizard-password="true" /></div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-confirm-password">Confirm Password*</label><input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" id="bootstrap-wizard-wizard-confirm-password" data-wizard-confirm-password="true" /></div>
                              </div>
                            </div> */}
                  {/* <div className="form-check"><input className="form-check-input" type="checkbox" name="terms" defaultChecked="checked" id="bootstrap-wizard-wizard-checkbox" /><label className="form-check-label text-900" htmlFor="bootstrap-wizard-wizard-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label></div> */}
                </form>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2">
                <form id="wizardForm2" noValidate="novalidate" data-wizard-form="2">
                <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Đăng ký dưới danh nghĩa</label>
                    <select class="form-select" aria-label="Default select example" name="registerType" >
                      <option selected disabled>-- Chọn danh nghĩa --</option>
                      <option value={true}>Cá nhân</option>
                      <option value={false}>Công ty/ Chuỗi</option>
                    </select></div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Tên đầy đủ người đại diện</label><input className="form-control" type="text" name="name" placeholder="Tên đầy đủ người đại diện"/></div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-email">Email</label><input className="form-control" type="email" name="email" placeholder="Email"/></div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-phone">Số điện thoại</label><input className="form-control" type="number" name="phoneNumber" placeholder="Số điện thoại"/></div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-phone">Số điện thoại khác</label><input className="form-control" type="number" name="anotherPhoneNumber" placeholder="Số điện thoại khác"/></div>
                  
                  
                  <div className="row g-4 mb-4" data-dropzone="data-dropzone">
                    <div className="fallback">
                      <input type="file" name="idCard" id='idCard-1' style={{display: 'none'}} />
                      <input type="file" name="idCard" id='idCard-2' style={{display: 'none'}} />
                      </div>
                    <div className="col-md-auto">
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Số CMND</label>
                          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md" style={{minHeight: 240}}>
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>Ảnh chụp mặt trước CMND</h5>
                          <p className="mb-0 fs--1 text-600 lh-sm">Tải lên ảnh mặt trước CMND <br />Lưu ý ảnh phải rõ ràng và không bị cắt góc</p>
                        </div>
                      </div>
                      
                    </div>
                    <div className="col-md">
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>Ảnh chụp mặt sau CMND</h5>
                          <p className="mb-0 fs--1 text-600 lh-sm">Tải lên ảnh mặt sau CMND <br />Lưu ý ảnh phải rõ ràng và không bị cắt góc</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="row g-4 mb-4" data-dropzone="data-dropzone">
                    <div className="fallback">
                      <input type="file" name="businessRegImages" id='businessRegImages' style={{display: 'none'}} />
                      </div>
                    <div className="col-md-auto">
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Đăng ký kinh doanh&nbsp;</label>
                          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md" style={{minHeight: 100, maxWidth: 200}}>
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>tải lên</h5>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-phone">Mã số thuế</label><input className="form-control" type="number" name="taxCode" placeholder="Mã số thuế"/></div>
                    <div className="row g-4 mb-4" data-dropzone="data-dropzone">
                    <div className="fallback">
                      <input type="file" name="taxCodeImages" id='taxCodeImages' style={{display: 'none'}} />
                      </div>
                    <div className="col-md-auto">
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Ảnh chụp mã số thuế</label>
                          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md" style={{minHeight: 100, maxWidth: 200}}>
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>tải lên</h5>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                  <div className="row g-4 mb-4" data-dropzone="data-dropzone">
                    <div className="fallback">
                      <input type="file" name="taxCodeImages" id='taxCodeImages' style={{display: 'none'}} />
                      </div>
                    <div className="col-md-auto">
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Giấy tờ liên quan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md" style={{minHeight: 100, maxWidth: 200}}>
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>tải lên</h5>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>

                </form>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab3" id="bootstrap-wizard-tab3">
                <form className="mb-2" id="wizardForm3" noValidate="novalidate" data-wizard-form="3">
                  <div className="row gx-3 gy-2">
                    <div style={{display: 'flex'}}>
                      <div>
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Thời gian mở cửa</label>

                      </div>
                      <div style={{marginLeft:40}}>
                        <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                        <Switch
                                  // checked={input}
                                  checkedChildren="Chủ nhật"
                                  unCheckedChildren="Chủ nhật"
                                  onChange={() => {
                                    setInput(!input);
                                  }}
                                  style={{width: 90}}
                                />
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                        <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                      </div>
                      <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                          <Switch
                                    // checked={input}
                                    checkedChildren="Thứ hai"
                                    unCheckedChildren="Thứ hai"
                                    onChange={() => {
                                      setInput(!input);
                                    }}
                                    style={{width: 90}}
                                  />
                          <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                        </div>
                        <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                        <Switch
                                  // checked={input}
                                  checkedChildren="Thứ ba"
                                  unCheckedChildren="Thứ ba"
                                  onChange={() => {
                                    setInput(!input);
                                  }}
                                  style={{width: 90}}
                                />
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                        <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                      </div>
                      <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                        <Switch
                                  // checked={input}
                                  checkedChildren="Thứ tư"
                                  unCheckedChildren="Thứ tư"
                                  onChange={() => {
                                    setInput(!input);
                                  }}
                                  style={{width: 90}}
                                />
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                        <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                      </div>
                      <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                        <Switch
                                  // checked={input}
                                  checkedChildren="Thứ năm"
                                  unCheckedChildren="Thứ năm"
                                  onChange={() => {
                                    setInput(!input);
                                  }}
                                  style={{width: 90}}
                                />
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                        <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                      </div>
                      <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                        <Switch
                                  // checked={input}
                                  checkedChildren="Thứ sáu"
                                  unCheckedChildren="Thứ sáu"
                                  onChange={() => {
                                    setInput(!input);
                                  }}
                                  style={{width: 90}}
                                />
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                        <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                      </div>
                      <div style={{display:'flex', alignItems:'center', marginBottom: 10}}>
                          
                        <Switch
                                  // checked={input}
                                  checkedChildren="Thứ bảy"
                                  unCheckedChildren="Thứ bảy"
                                  onChange={() => {
                                    setInput(!input);
                                  }}
                                  style={{width: 90}}
                                />
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name" style={{marginLeft:30, marginRight:20}}>Mở cửa</label>
                        <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                          <span style={{margin: '0 10px'}}>-</span>
                          <Space>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                          </Space>
                      </div>
                      </div>
                    </div>
                    
                    </div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-phone">Từ khoá tìm kiếm</label><input className="form-control" type="text" name="taxCode" placeholder="Từ khoá tìm kiếm"/></div>
                    <div className="mb-2"><label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-phone">Miêu tả về quán</label><textarea class="form-control" id="exampleTextarea" rows="3"> </textarea></div>
                    <div className="row g-4 mb-4" data-dropzone="data-dropzone">
                    <div className="fallback">
                      <input type="file" name="taxCodeImages" id='taxCodeImages' style={{display: 'none'}} />
                      </div>
                    <div className="col-md-auto">
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Ảnh đại diện quán</label>
                          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md" style={{minHeight: 100, maxWidth: 200}}>
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>tải lên</h5>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                  <div className="row g-4 mb-4" data-dropzone="data-dropzone">
                    <div className="fallback">
                      <input type="file" name="taxCodeImages" id='taxCodeImages' style={{display: 'none'}} />
                      </div>
                    <div className="col-md-auto">
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <label className="form-label text-900" htmlFor="bootstrap-wizard-wizard-name">Ảnh bìa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md" style={{minHeight: 100, maxWidth: 200}}>
                      <div className="dz-message dropzone-area px-2 py-3" data-dz-message="data-dz-message">
                        <div className="text-center text-1100">
                          <h5 className="mb-2"><span className="fa-solid fa-upload me-2"></span>tải lên</h5>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                  
                </form>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab4">
                <div className="row flex-center pb-8 pt-4 gx-3 gy-4">
                  <div className="col-12 col-sm-auto">
                    <div className="text-center text-sm-start"><img className="d-dark-none" src="../../assets/img/spot-illustrations/38.webp" alt="" width="220" /><img className="d-light-none" src="../../assets/img/spot-illustrations/dark_38.webp" alt="" width="220" /></div>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <div className="text-center text-sm-start">
                      <h5 className="mb-3">You are all set!</h5>
                      <p className="text-1100 fs--1">Now you can access your account<br />anytime anywhere</p><a className="btn btn-primary px-6" href="wizard.html">Start Over</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer border-top-0" data-wizard-footer="data-wizard-footer">
            <div className="d-flex pager wizard list-inline mb-0"><button className="d-none btn btn-link ps-0" type="button" data-wizard-prev-btn="data-wizard-prev-btn"><span className="fas fa-chevron-left me-1" data-fa-transform="shrink-3"></span>Previous</button>
              <div className="flex-1 text-end"><button className="btn btn-primary px-6 px-sm-6" type="submit" data-wizard-next-btn="data-wizard-next-btn" onClick={handleClickNext}>Next<span className="fas fa-chevron-right ms-1" data-fa-transform="shrink-3"> </span></button></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BasicInfo