import React from 'react'
import NavbarDefault from '../../components/Navbars/NavbarDefault'
import { Avatar, Badge, Card, Carousel, Pagination, Rate } from 'antd';
import '../../assets/css/homePage.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { API_PATH } from '../authentication/ApiPath';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 70,
    width: '90%',
    height: '100%',
    filter: 'blur(8px)',
    background: 'rgb(0 0 0 / 29%)',
    zIndex: 1,
  };

  const textAtCornerStyle = {
    position: 'absolute',
    top: '100px', // Điều chỉnh vị trí top theo ý muốn
    left: '170px', // Điều chỉnh vị trí left theo ý muốn
    color: 'white', // Màu chữ
    zIndex: 2, // Đảm bảo chữ hiển thị trên lớp blur
    fontSize: '3.0517578125rem',
    fontWeight: 800,
    color: '#ffcc85'
  };

  const Deal = ({restaurant}) => {
    console.log(restaurant)
    return (
       <>
         <Card
            style={{
            width: 300,
            margin: 10,
            cursor:'pointer'
            }}
            bodyStyle={{padding: 14}}
            cover={
            <img
                alt="example"
                src={restaurant.detailInformation != null?
                `${API_PATH}/${restaurant.detailInformation.avatar}`:`../../assets/img/bg/bg.jpg`
                }
                height={'150px'}
                style={{objectFit: 'cover'}}
            />
            }
            actions={[
                <div style={{textAlign:'left', paddingLeft: 20}}>
                    <Rate disabled defaultValue={Math.floor(Math.random() * 5) + 1}/>
                </div>
            ]}
        >
            <Meta
            // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={`${restaurant.name} - ${restaurant.type} - ${restaurant.street}`}
            description={<span>{restaurant.province} - {restaurant.district} - {restaurant.ward}</span>}
            />
            {/* <div style={{textAlign: 'right', marginTop: 10}}>
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
            </div> */}
        </Card>
         
         </>
    );
   };
function HomePage() {
    const { userInfo } = useSelector(state => state)
    const [listRestaurant, setListRestaurant] = useState([])
    const listRes = () =>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${API_PATH}/api/restaurant/gets?order=ASC&page=1&take=50`,
            headers: { 
              'accept': '*/*', 
              'Authorization': `Bearer ${userInfo.accessToken}`
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data.data);
            setListRestaurant(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });
          
    }
   useEffect(()=>{
    listRes()
   },[])
  return (
    <>
    <NavbarDefault search={false}/>
    <div style={{marginTop: 100, padding: '0 70px', position: 'relative'}}>
    <div style={blurOverlayStyle}></div>
    <div style={textAtCornerStyle}>Giảm giá <span style={{color:'#ff97e0'}}>10%</span> Tại <br />
        <span style={{color: 'white', fontSize: '.6em'}}>nhà hàng của chúng tôi</span></div> 
    <Carousel autoplay>
    <div >
    <img src={require('../../assets/images/res/home-page-1.jpg')} alt="" width={'100%'} height={"500px"} style={{objectFit: 'cover',borderRadius: 8}}/>
    </div>
    <div>
    <img src={require('../../assets/images/res/home-page-2.jpg')} alt="" width={'100%'}height={"500px"} style={{objectFit: 'cover',borderRadius: 8}}/>
    </div>
    <div>
    <img src={require('../../assets/images/res/home-page-3.jpg')} alt="" width={'100%'}height={"500px"} style={{objectFit: 'cover',borderRadius: 8}}/>
    </div>
    <div>
    <img src={require('../../assets/images/res/home-page-4.jpg')} alt="" width={'100%'}height={"500px"} style={{objectFit: 'cover',borderRadius: 8}}/>
    </div>
  </Carousel>

    </div>
    <div style={{padding: '20px 70px', paddingBottom:0}}>
        <h3>Nhà hàng nổi bật</h3>
    </div>
    <div className="deal-container">
        {
            listRestaurant.map((restaurant)=>{
                return <Link to={`/restaurant-detail/${restaurant.id}`} style={{textDecoration:'none'}}><Deal restaurant={restaurant}/></Link>
            })
        }

    </div>
    <div style={{textAlign: 'right', margin: 20}}>
    <Pagination simple defaultCurrent={1} total={50} />
    </div>
    <footer class="footer position-relative">
        <div class="row g-0 justify-content-between align-items-center h-100">
          <div class="col-12 col-sm-auto text-center">
            <p class="mb-0 mt-2 mt-sm-0 text-900">Creater by Restart team<span class="d-none d-sm-inline-block"></span><span class="d-none d-sm-inline-block mx-1">|</span><br class="d-sm-none" />2023 &copy;<a class="mx-1" href="#">Restart</a></p>
          </div>
          <div class="col-12 col-sm-auto text-center">
            <p class="mb-0 text-600">v1.12.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage