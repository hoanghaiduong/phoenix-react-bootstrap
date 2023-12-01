import React from 'react'
import '../../assets/css/custom.css'
import NavbarDefault from '../../components/Navbars/NavbarDefault'
import NavbarVertical from './NavbarVertical'
import TopNavSlim from '../../components/Navbars/TopNavSlim'
import NavbarTop from '../../components/Navbars/NavbarTop'
import axios from 'axios';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import { API_PATH } from '../authentication/ApiPath'
import { Button, Card, Form, Image, Input, InputNumber, Modal, Radio, Select, Space, Table, Tag, Upload, message } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'

const CreateItemForm = ({ visible, editData, onCreate, onCancel }) => {
    const {userInfo} = useSelector(state => state);
    const [categories, setCategories] = useState([])
    const [form] = Form.useForm();
  
    const normFile = (e) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  
    const beforeUpload = (file) => {
      // Add any custom logic for file validation here
      return true;
    };
  
    const onFinish = (values) => {
      // Add any additional logic here before calling onCreate
      onCreate(values);
      form.resetFields();
    };
    useEffect(() => {
        if (visible) {
            console.log(editData)
            form.resetFields();
          form.setFieldsValue(
            {
                ...editData,
                photo: null
            });
        }
      }, [visible, editData, form]);
    useEffect(()=>{
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${API_PATH}/api/categories/gets?order=ASC&page=1&take=50`,
        headers: { 
            'accept': '*/*', 
            'Authorization': `Bearer ${userInfo.accessToken}`
        }
        };

        axios.request(config)
        .then((response) => {
        console.log(response.data.data);
        var temp = []
        response.data.data.map((data)=>{
            temp.push(
                {
                    value: data.id,
                    label: data.name
                }
            )
        })
        setCategories(temp)
        })
        .catch((error) => {
        console.log(error);
        });

    },[])
  
    return (
      <Modal
        visible={visible}
        title="Thêm sản phẩm"
        okText="Xác nhận"
        cancelText="Huỷ"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields(
                
            )
            .then((values) => {
              onFinish(values);
            })
            .catch((errorInfo) => {
              console.log('Validation Failed:', errorInfo);
            });
        }}
      >
        <Form form={form} layout="vertical" name="createItemForm" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Tên sản phẩm"
            rules={[{ required: true, message: 'Xin hãy nhập tên sản phẩm!' }]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea />
          </Form.Item>
  
          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, type: 'number', message: 'Xin hãy nhập giá!' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
  
          <Form.Item
            name="photo"
            label="Ảnh"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Xin hãy chọn ảnh!' }]}
          >
            <Upload beforeUpload={beforeUpload} listType="picture" maxCount={1}>
              <Button icon={<PlusOutlined />}>Tải lên</Button>
            </Upload>
          </Form.Item>
  
          <Form.Item
            name="categoryId"
            label="Category ID"
            rules={[{ required: true, message: 'Xin hãy chọn category ID!' }]}
          >
            <Select
            defaultValue="-- Chọn doanh mục -- "
            style={{
                width: "100%",
            }}
            options={categories}
            />
          </Form.Item>
  
        </Form>
      </Modal>
    );
  };
const columns = [
    {
        title: '#',
        dataIndex: 'stt',
        key: 'stt',
        render: (text, record, index) => index + 1,
      },
    {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo',
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    
    {
      title: '',
      key: 'action',
      dataIndex: 'action'
    },
  ];
function Products() {
  const [listProducts, setListProducts] = useState([])
  const {userInfo} = useSelector(state => state);
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const [editData, setEditData] = useState(null)

  const createProduct = (data)=>{
    const apiUrl = `${API_PATH}/api/product/create`;

    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('name', data.name);
    formData.append('photo', data.photo[0].originFileObj);
    formData.append('images', null);
    formData.append('categoryId', data.categoryId);
    formData.append('price', Number(data.price));
    formData.append('restaurantId', id);

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
        getProducts()
        message.success('Thêm sản phẩm thành công!');
        console.log(response.data);
        setVisible(false);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });

  }
  const editProduct = (data)=>{
    const apiUrl = `${API_PATH}/api/product/update?id=${editData.id}`;

    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('name', data.name);
    formData.append('categoryId', data.categoryId);
    formData.append('price', Number(data.price));
    formData.append('restaurantId', id);

    axios.put(apiUrl, formData, {
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
        getProducts()
        message.success('Sửa sản phẩm thành công!');
        console.log(response.data);
        setVisible(false);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });

  }
  const deleteProduct = (idDel)=>{
    const apiUrl = `${API_PATH}/api/product/delete?id=${idDel}`;

    axios.delete(apiUrl, {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${userInfo.accessToken}`
      },
    })
      .then(response => {
        // Handle the response
        getProducts()
        message.success('Xoá sản phẩm thành công!');
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });

  }
  const handleCreate = (values) => {
    // Handle the creation logic here
    console.log('Received values:', values);
    if(editData == null)
        createProduct(values)
    else
        editProduct(values)
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const getProducts = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/restaurant/getProducts?restaurant_id=${id}`,
      headers: { 
        'accept': '*/*', 
        'Authorization': `Bearer ${userInfo.accessToken}`
        }
      };

      axios.request(config)
      .then((response) => {
        console.log(response.data.products);
        var temp = []
        response.data.products.map((product)=>{
            temp.push(
                {
                    key: product.id,
                    photo: (
                        <Image
                            width={50}
                            src={`${API_PATH}/${product.photo}`}
                        />
                    ),
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    action: (
                        <div style={{textAlign: 'right'}}>
                        <Space size="middle">
                        <a onClick={()=>{
                            setEditData(product)
                            setVisible(true)
                        }}>Sửa</a>
                        <a style={{color: 'red'}} onClick={()=>deleteProduct(product.id)}>Xoá</a>
                        </Space>
                            </div>
                    )
                  }
            )
        })
        setListProducts(temp)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(()  => {
      getProducts()
      }, []);
  
  
  return (
    <>
    <NavbarDefault search={false}/>
    {/* <topNavSlim/>
    <navbarTop/> */}
    <NavbarVertical target={'products'}/>
    
    <div class="content">
  <nav className="mb-2" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item">
        <a href="#!">Restaurant</a>
      </li>
      {/* <li className="breadcrumb-item">
        <a href="#!">Page 2</a>
      </li> */}
      <li className="breadcrumb-item active">Products</li>
    </ol>
  </nav>
  <div className="mb-9">
    <div className="row g-3 mb-4">
      <div className="col-auto">
        <h2 className="mb-0">Products</h2>
      </div>
    </div>
    <div
      id="products"
      data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
    >
      <div className="mb-4">
        <div className="row g-3">
          <div className="col-auto">
            <div className="search-box">
              <form
                className="position-relative"
                data-bs-toggle="search"
                data-bs-display="static"
              >
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Search Products"
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
            </div>
          </div>
          <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
            <div className="btn-group position-static" role="group">
              <div className="btn-group position-static text-nowrap">
                <button
                  className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  {" "}
                  Category
                  <span className="fas fa-angle-down ms-2" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-group position-static text-nowrap">
                <button
                  className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  {" "}
                  Vendor
                  <span className="fas fa-angle-down ms-2" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">
                More filters
              </button>
            </div>
          </div>
          <div className="col-auto">
            {/* <button className="btn btn-link text-900 me-4 px-0">
              <span className="fa-solid fa-file-export fs--1 me-2" />
              Export
            </button> */}
            {/* <button className="btn btn-primary" id="addBtn">
              <span className="fas fa-plus me-2" />
              Add Users
            </button> */}
          </div>
        </div>
      </div>
      <div >
      <Card
      bordered={false}
      bodyStyle={{padding: "0"}}
      className="criclebox tablespace mb-24"
      extra={
        <>
          <Radio.Group style={{padding: 20}}>
            <Radio.Button onClick={() => {
                setEditData(null)
                setVisible(true)
            }}>+ Thêm sản phẩm</Radio.Button>
          <Radio.Button style={{color:'gray', borderColor: 'gray'}}><Link to="/restaurant/management">Trở về</Link></Radio.Button>
          </Radio.Group>
        
        </>
      }>
        <div className="table-responsive">

      <Table columns={columns} dataSource={listProducts} />
        </div>
      </Card>
      </div>
    </div>
  </div>
  </div>
  <CreateItemForm visible={visible} editData={editData} onCreate={handleCreate} onCancel={handleCancel} />
</>
  )
}

export default Products