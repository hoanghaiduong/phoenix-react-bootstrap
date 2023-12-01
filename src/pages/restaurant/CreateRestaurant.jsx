import React, { useEffect, useState } from 'react'
import NavbarDefault from '../../components/Navbars/NavbarDefault'
import { Link } from 'react-router-dom'
import { API_PATH } from '../authentication/ApiPath';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Avatar, Badge, Card } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// require('../../../public/assets/img/bg/bg.jpg')
function CreateRestaurant() {
    const {userInfo} = useSelector(action=>action)
    const [listRestaurants, setListRestaurants] = useState([])

    const covertDate = (dateString) =>{
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const formattedDate = new Intl.DateTimeFormat('vi', options).format(date);
      // const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      // const finalFormattedDate = `${formattedDate} ${ampm}`;
      const finalFormattedDate = `${formattedDate}`;
      return finalFormattedDate
  
    }
    const deleteRes = (id) =>{
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/restaurant/delete?id=${id}`,
      headers: { 
        'accept': '*/*', 
        'Authorization': `Bearer ${userInfo.accessToken}`
      }
    };

    axios.request(config)
    .then((response) => {
      getListRes()
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

    }
    const getListRes = () =>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${API_PATH}/api/restaurant/getRestaurantsByUser?order=ASC&page=1&take=500`,
        headers: { 
          'accept': '*/*', 
          'Authorization': `Bearer ${userInfo.accessToken}`
        }
      };

      axios.request(config)
      .then((response) => {
        console.log(response.data.data);
        setListRestaurants(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }
    useEffect(()=>{
      getListRes()

    },[])
    const { Meta } = Card;
    return (
        <>
        <NavbarDefault search={false}/>
        <div class="content-container">
        <div class="d-flex flex-center content-min-h">
          {
            listRestaurants.length == 0 ?
            <div class="text-center py-9"><img class="img-fluid mb-7 d-dark-none" src="../assets/img/logos/restautrant-removebg-preview.png" width="300" alt="" /><img class="img-fluid mb-7 d-light-none" src="../assets/img/logos/restautrant-bl-removebg-preview.png" width="200" alt="" />
            <h1 class="text-500 fw-normal mb-5" style={{fontSize: "1.5em"}}>Không có nhà hàng nào</h1>
          <Link className="btn btn-lg btn-outline-primary" to='/restaurant/basic-info'>Tạo nhà hàng</Link>
          </div>
          :
          <Card style={{marginTop: 120}}>
          <div class="card" style={{ overflow: 'auto', marginBottom: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: 'none', border: 'none', width: '90vw', borderRadius: 8, padding: 20, paddingTop: 40}}>
            <div style={{display: 'flex', justifyContent: 'flex-end', width: '98%'}}>
              <Link className="btn btn-lg btn-primary" to='/restaurant/basic-info' style={{fontWeight: 400, marginBottom:20}}>+ Tạo nhà hàng</Link></div>
              <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-between'}}>
            {
              listRestaurants.map((restaurant) =>{
                return(
                  <Card
                      style={{
                        width: 300,
                        margin: 10
                      }}
                      cover={
                        <img
                          alt="example"
                          src={restaurant.detailInformation != null?
                            `${API_PATH}/${restaurant.detailInformation.avatar}`:`../../assets/img/bg/bg.jpg`
                            }
                            height={'200px'}
                            style={{objectFit: 'cover'}}
                        />
                      }
                      actions={[
                        <Link to={`/restaurant/products/${restaurant.id}`}><SettingOutlined key="setting" /></Link>,
                        <EditOutlined key="edit" />,
                        <DeleteOutlined key="delete" onClick={()=>deleteRes(restaurant.id)}/>
                        // <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title={`${restaurant.name} - ${restaurant.type} - ${restaurant.street}`}
                        description={<span>{restaurant.province} - {restaurant.district} - {restaurant.ward}</span>}
                      />
                      <div style={{textAlign: 'right', marginTop: 10}}>
                      {
                        restaurant.statusGranted==1&&!restaurant.disabled? 
                        <Badge status="success" text="Activate"/>
                        :
                        restaurant.statusGranted==0&&!restaurant.disabled?
                        <Badge status="processing" text="Waiting"/>
                        :
                        restaurant.statusGranted==2&&!restaurant.disabled?
                        <Badge status="error" text="Failed"/>
                        :
                        <Badge status="warning" text="Lock"/>
                        }
                      </div>
                    </Card>
                //   <div class="card mb-0" style={{margin: 20, minWidth: '95%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                //   <div class="card-body">
                //     <div style={{display: 'flex', justifyContent: 'space-between'}}>
                //     <h1 class="lh-sm mb-2 fw-bold" style={{fontSize: '1.3em', paddingTop:5}}>&nbsp;{restaurant.name} - {restaurant.type} - {restaurant.street}</h1>
                //     {
                //         restaurant.statusGranted==1&&!restaurant.disabled? 
                //         <span class="badge badge-phoenix fs--2 badge-phoenix-success" style={{padding: '8px 20px', height: 30}}><span class="badge-label">Activate</span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check ms-1" style={{height: 12.8, width:12.8}}><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                //         :
                //         restaurant.statusGranted==0&&!restaurant.disabled?
                //         <span class="badge badge-phoenix fs--2 badge-phoenix-warning" style={{padding: '8px 20px', height: 30}}><span class="badge-label">Waiting</span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock ms-1" style={{height: 12.8, width:12.8}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
                //         :
                //         restaurant.statusGranted==2&&!restaurant.disabled?
                //         <span class="badge badge-phoenix fs--2 badge-phoenix-danger" style={{padding: '8px 20px', height: 30}}><span class="badge-label">Failed</span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x ms-1" style={{height: 12.8, width:12.8}}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                //         :
                //         <span class="badge badge-phoenix fs--2 badge-phoenix-danger" style={{padding: '8px 20px', height: 30}}><span class="badge-label">Lock</span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x ms-1" style={{height: 12.8, width:12.8}}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                //       }

                //     </div>
                //     <p class="fs-0 mb-4 text-600"></p>
                    
                //     <div class="card mb-5 mb-xxl-7">
                //       <div class="card-body">
                //         <div class="row gy-5">
                //         <div class="col-md-4 d-flex justify-content-between">
                //             <img src="../../assets/img/bg/bg.jpg" alt=""  style={{width: '100%', borderRadius: 8, height: 180, objectFit: 'cover'}}/>
                //           <div class="my-4 mx-3 border-start d-none d-md-block"></div>
                            
                //           </div>
                //           <div class="col-md-4 d-flex justify-content-between">
                //             <div>
                //               <div class="mb-3">
                //                 <div class="d-flex align-items-center">
                //                   <div class="px-2 py-1 bg-info-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin text-info"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                //                   <h5 class="ms-2 text-1100 mb-0">Địa chỉ</h5>
                //                 </div>
                //               </div>
                //               <p class="lh-sm mb-0 text-700">{restaurant.province} - {restaurant.district}<br />{restaurant.ward}</p>
                //             </div>
                //             <div class="my-4 mx-3 border-start d-none d-md-block"></div>
                //           </div>
                //           <div class="col-md-4">
                //             <div class="mb-3">
                //               <div class="d-flex align-items-center">
                //                 <div class="px-2 py-1 bg-primary-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                //                 <h5 class="ms-2 mb-0">Ngày &amp; Giờ sửa lần cuối</h5>
                //               </div>
                //             </div>
                //             <p class="lh-sm mb-0 text-700">{covertDate(restaurant.updatedAt)}</p>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //     <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                //     <div class="row g-2 w-30">
                //       <div class="col-12 col-md-auto flex-md-grow-1"><button class="btn btn-primary w-100" type="button">Quản lý nhà hàng</button></div>
                //       <div class="col-12 col-sm-auto flex-sm-grow-1 flex-md-grow-0"><button class="btn btn-phoenix-primary w-100" type="button">Chỉnh sửa thông tin </button></div>
                //     </div>
                //     </div>
                //   </div>
                // </div>
                )
              })

            }
            
            </div>
        
            </div>
            </Card>
          
        }
        </div>
        
        {/* <footer class="footer position-absolute">
          <div class="row g-0 justify-content-between align-items-center h-100">
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 mt-2 mt-sm-0 text-900">Tạo nhà hàng mới với<a class="mx-1" href="#">Restart</a></p>
            </div>
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 text-600">Create by KietNguyen</p>
            </div>
          </div>
        </footer> */}
      </div>
      </>
    )
}

export default CreateRestaurant