import React from 'react'
import '../../../assets/css/custom.css'
import NavbarDefault from '../../../components/Navbars/NavbarDefault'
import NavbarVertical from '../../../components/Navbars/NavbarVertical'
import TopNavSlim from '../../../components/Navbars/TopNavSlim'
import NavbarTop from '../../../components/Navbars/NavbarTop'
import axios from 'axios';
import { useEffect } from 'react'
import { API_PATH } from '../../authentication/ApiPath'
import { useSelector } from 'react-redux';
import { useState } from 'react'

function UserInfo({uid, imageUrl, name, email, role, updateAt, listRoles}) {
  const {userInfo} = useSelector(state => state);
  const covertDate = (dateString) =>{
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    // const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    // const finalFormattedDate = `${formattedDate} ${ampm}`;
    const finalFormattedDate = `${formattedDate}`;
    return finalFormattedDate

  }
  
  const changeRole = (roleId, uid) => {
    const select = document.getElementById(email)
    const selectedOption = select.options[select.selectedIndex];
    const selectedColor = selectedOption.style.color;
    select.style.color = selectedColor;
    const FormData = require('form-data');
    let data = new FormData();
    data.append('roleId', roleId);

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/users/update-by-admin?uid=${uid}`,
      headers: { 
        'accept': '*/*', 
        'Authorization': `Bearer ${userInfo.accessToken}`
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  }
  
  const selectRole = (role) =>{
    const roleSelect = role
    const foundIdAdmin = listRoles.find((obj) => obj.name === "admin").id
    const foundIdRestaurant = listRoles.find((obj) => obj.name === "restaurant").id
    const foundIdUser = listRoles.find((obj) => obj.name === "user").id
     return(
         roleSelect=="admin"?
         <>
         <select class="form-select" id={email} onChange={(e)=>changeRole(e.target.value, uid)} style={{color: 'gold'}}>
          <option selected value={foundIdAdmin} style={{color: 'gold'}}>Admin</option>
          <option value={foundIdRestaurant} style={{color: 'darkgreen'}}>Restaurant</option>
          <option value={foundIdUser} style={{color: 'black'}}>User</option>
          </select>
          </>
          :
          roleSelect=="restaurant"?
          <>
          <select class="form-select" id={email} onChange={(e)=>changeRole(e.target.value, uid)} style={{color: 'darkgreen'}}>
          <option value={foundIdAdmin} style={{color: 'gold'}}>Admin</option>
          <option selected value={foundIdRestaurant} style={{color: 'darkgreen'}}>Restaurant</option>
          <option value={foundIdUser} style={{color: 'black'}}>User</option>
          </select>
          </>
          :
          <>
          <select class="form-select" id={email} onChange={(e)=>changeRole(e.target.value, uid)} style={{color: 'black'}}>
          <option value={foundIdAdmin} style={{color: 'gold'}}>Admin</option>
          <option value={foundIdRestaurant} style={{color: 'darkgreen'}}>Restaurant</option>
          <option selected value={foundIdUser} style={{color: 'black'}}>User</option>
          </select>
          </>
        
     )
  }
  return (
    <tr className="position-static">
    <td className="fs--1 align-middle">
        <div className="form-check mb-0 fs-0">
            <input
                className="form-check-input"
                type="checkbox"
                data-bulk-select-row='{"product":"iPhone 13 pro max-Pacific Blue-128GB storage","productImage":"/products/2.png","price":"$87","category":"Furniture","tags":["Class","Camera","Discipline","invincible","Pro","Swag"],"star":true,"vendor":"Beatrice Furnitures","publishedOn":"Nov 11, 7:36 PM"}'
            />
        </div>
    </td>
    <td className="align-middle white-space-nowrap py-0">
        <div className="rounded-2">
          {
            imageUrl != null ?
            imageUrl.includes("http") ? 
            <img
                src={imageUrl}
                alt=""
                width={43}
                height={43}
                style={{objectFit: 'cover', borderWidth:'none', borderRadius:'50%'}}
            />:
            <img
                src={API_PATH+imageUrl}
                alt=""
                width={43}
                height={43}
                style={{objectFit: 'cover', borderWidth:'none', borderRadius:'50%'}}
            />
            :
            <img
                src={'data:image/jpeg;base64,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'}
                alt=""
                width={43}
                height={43}
                style={{objectFit: 'cover', borderWidth:'none', borderRadius:'50%'}}
            />
          }
        </div>
    </td>
    <td className="product align-middle ps-4">
            <path style={{fontWeight: 'bold'}}>{name}</path>
    </td>
    <td className="product align-middle ps-4">
        <a className="fw-semi-bold line-clamp-3 mb-0" href="#">
            {email}
        </a>
    </td>
    
    <td className="vendor align-middle text-start fw-semi-bold ps-4">
        {/* {role == "admin" ? <path style={{color: 'gold'}}>{role}</path> : role == "user" ? <path style={{color: 'black'}}>{role}</path> : <path style={{color: 'darkgreen'}}>{role}</path> } */}
        {role == "admin" ? selectRole("admin") : role == "user" ? selectRole("user") : selectRole("restaurant") }
        
    </td>
    <td className="time align-middle white-space-nowrap text-600 ps-4">
        {covertDate(updateAt)}
    </td>
    <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
        <div className="font-sans-serif btn-reveal-trigger position-static">
            <button
                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs--2"
                type="button"
                data-bs-toggle="dropdown"
                data-boundary="window"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-reference="parent"
            >
                <span className="fas fa-ellipsis-h fs--2" />
            </button>
            <div className="dropdown-menu dropdown-menu-end py-2">
                {/* <a className="dropdown-item" href="#!">
                    View
                </a>
                <a className="dropdown-item" href="#!">
                    Export
                </a>
                <div className="dropdown-divider" /> */}
                <a className="dropdown-item text-danger" href="#!">
                    Remove
                </a>
            </div>
        </div>
    </td>
</tr>
  )
}

function UserList() {
  const [listUsers, setListUsers] = useState([])
  const {userInfo} = useSelector(state => state);
  const [listRoles, setListRoles] = useState([])
  console.log(listUsers)
  const getUsers = () =>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/users/gets?order=ASC&page=1&take=10`,
      headers: { 
        'accept': '*/*', 
        'Authorization': `Bearer ${userInfo.accessToken}`
        }
      };

      axios.request(config)
      .then((response) => {
        // console.log(response.data);
        setListUsers(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

      useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${API_PATH}/api/roles/gets?order=ASC&page=1&take=10`,
          headers: { 
            'accept': '*/*', 
            'Authorization': `Bearer ${userInfo.accessToken}`
          }
        };
    
        axios.request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          setListRoles(response.data.data)
          getUsers()
        })
        .catch((error) => {
          console.log(error);
        });
    
    
    
      },[])
  return (
    <>
    <NavbarDefault search={false}/>
    {/* <topNavSlim/>
    <navbarTop/> */}
    <NavbarVertical target={'users'}/>
    
    <div class="content">
  <nav className="mb-2" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item">
        <a href="#!">Admin</a>
      </li>
      {/* <li className="breadcrumb-item">
        <a href="#!">Page 2</a>
      </li> */}
      <li className="breadcrumb-item active">Users</li>
    </ol>
  </nav>
  <div className="mb-9">
    <div className="row g-3 mb-4">
      <div className="col-auto">
        <h2 className="mb-0">Users</h2>
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
                  placeholder="Search Users"
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
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
        <div className="table-responsive scrollbar mx-n1 px-1">
          <table className="table fs--1 mb-0">
            <thead>
              <tr>
                <th
                  className="white-space-nowrap fs--1 align-middle ps-0"
                  style={{ maxWidth: 20, width: 18 }}
                >
                  <div className="form-check mb-0 fs-0">
                    <input
                      className="form-check-input"
                      id="checkbox-bulk-products-select"
                      type="checkbox"
                      data-bulk-select='{"body":"products-table-body"}'
                    />
                  </div>
                </th>
                <th
                  className="sort white-space-nowrap align-middle fs--2"
                  scope="col"
                  style={{ width: 70 }}
                />
                <th
                  className="sort white-space-nowrap align-middle ps-4"
                  scope="col"
                  data-sort="price"
                  style={{ width: 250 }}
                >
                  NAME
                </th>
                <th
                  className="sort white-space-nowrap align-middle ps-4"
                  scope="col"
                  style={{ width: 650 }}
                  data-sort="product"
                >
                  EMAIL
                </th>
                <th
                  className="sort white-space-nowrap align-middle ps-4"
                  scope="col"
                  data-sort="price"
                  style={{ width: 250 }}
                >
                  ROLE
                </th>
                <th
                  className="sort white-space-nowrap align-middle ps-4"
                  scope="col"
                  data-sort="price"
                  style={{ width: 250 }}
                >
                  UPDATE AT
                </th>
                <th
                  className="sort text-end align-middle pe-0 ps-4"
                  scope="col"
                />
              </tr>
            </thead>
            <tbody className="list" id="products-table-body">
            {
              listUsers.length === 0 ? <p>Loading...</p> : 
              listUsers.map((user, index) => (
                <UserInfo key={index} uid={user.uid} imageUrl={user.photoURL} name={user.displayName} email={user.email} role={user.role.name} updateAt={user.updatedAt} listRoles={listRoles} />
              ))
            }
            </tbody>
          </table>
        </div>
        <div className="row align-items-center justify-content-between py-2 pe-0 fs--1">
          <div className="col-auto d-flex">
            <p
              className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900"
              data-list-info="data-list-info"
            />
            <a className="fw-semi-bold" href="#!" data-list-view="*">
              View all
              <span
                className="fas fa-angle-right ms-1"
                data-fa-transform="down-1"
              />
            </a>
            <a className="fw-semi-bold d-none" href="#!" data-list-view="less">
              View Less
              <span
                className="fas fa-angle-right ms-1"
                data-fa-transform="down-1"
              />
            </a>
          </div>
          <div className="col-auto d-flex">
            <button className="page-link" data-list-pagination="prev">
              <span className="fas fa-chevron-left" />
            </button>
            <ul className="mb-0 pagination" />
            <button className="page-link pe-0" data-list-pagination="next">
              <span className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>
  )
}

export default UserList