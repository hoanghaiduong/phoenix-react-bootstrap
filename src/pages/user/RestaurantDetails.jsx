import React from 'react'
import NavbarDefault from '../../components/Navbars/NavbarDefault'
import { Button, Image } from 'antd'
import { Link } from 'react-router-dom'

function RestaurantDetails() {
  return (
    <>
    <NavbarDefault search={false}/>
    <div style={{marginTop: 100, padding: '0 240px'}}>
    <h3 style={{textAlign:'center', marginTop: 30, marginBottom: 30}}>Hình ảnh sảnh tiệt</h3>
    <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <div style={{display: 'flex'}}>
    <div style={{width: '29%', height: 700, marginRight: "1%"}}>
    <Image width={"100%"} height={340} src={require("../../assets/images/res/home-page-3.jpg")} style={{
            objectFit: 'cover',
            borderRadius: 5,
        }}/>
    <br />  
    <Image width={"100%"} height={340} src={require("../../assets/images/res/home-page-3.jpg")} style={{
            objectFit: 'cover',
            marginTop: 20,
            borderRadius: 5,
        }}/>
    </div>
    <div style={{width: '69%', marginLeft: '1%'}}>
        <Image
        width={'100%'}
        height={700}
        style={{
            objectFit: 'cover',
            borderRadius: 5,
        }}
        src={require("../../assets/images/res/home-page-1.jpg")}
        />

    </div>
    </div>
    <div style={{display:'flex'}}>
        <div style={{width: "50%"}}>
        <Image
            width={'100%'}
            height={400}
            style={{
                objectFit: 'cover',
                borderRadius: 5,
                marginRight: "1%",
                marginTop: '2%'
            }}
            src={require("../../assets/images/res/home-page-1.jpg")}
            />
        </div>
        <div style={{width: "50%"}}>
        <Image
            width={'99%'}
            height={400}
            style={{
                objectFit: 'cover',
                borderRadius: 5,
                marginLeft: "1%",
                marginTop: '2%'
            }}
            src={require("../../assets/images/res/home-page-1.jpg")}
            />
        </div>
    </div>
  </Image.PreviewGroup>
  <hr />
  <h3 style={{textAlign:'center', marginTop: 30}}>Thực đơn</h3>
  <Image
        width={'100%'}
        height={"100%"}
        style={{
            objectFit: 'cover',
            borderRadius: 5,
            marginLeft: "1%",
            marginTop: '2%'
        }}
        src={require("../../assets/images/res/menu.jpg")}
        />
    </div>
    <div style={{textAlign: 'right', marginTop: 20, marginRight: 20}}>
        <Button type="primary" size='large'>Đặt tiệt</Button> <Link to={"/home-page"}><Button size='large'>Trở về</Button></Link>
    </div>
    <footer class="footer position-relative" style={{ marginTop: 30}}>
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

export default RestaurantDetails