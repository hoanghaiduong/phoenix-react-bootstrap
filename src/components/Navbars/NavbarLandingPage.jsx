import React from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import { Search } from 'react-feather'
import ModalSearch from '../LandingPage/ModalSearch'

function NavbarLandingPage() {
    return (
        <>
            <div
                className="bg-white sticky-top landing-navbar"
                data-navbar-shadow-on-scroll="data-navbar-shadow-on-scroll"
            >
                <nav className="navbar navbar-expand-lg container-small px-3 px-lg-7 px-xxl-3">
                    <Link className="navbar-brand flex-1 flex-lg-grow-0" to={"/"}>
                        <div className="d-flex align-items-center">
                            <img src="../../assets/img/logos/logorestart-removebg-preview2.png" alt="" width={167} />
                            <p className="logo-text ms-2"></p>
                        </div>
                    </Link>
                    <div className="d-lg-none">

                        <ThemeSwitcher />

                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="border-bottom border-bottom-lg-0 mb-2">
                            <div className="search-box d-inline d-lg-none">
                                <form
                                    className="position-relative"
                                    data-bs-toggle="search"
                                    data-bs-display="static"
                                >
                                    <input
                                        className="form-control search-input search rounded-pill my-4"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <span className="fas fa-search search-box-icon" />
                                </form>
                            </div>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item border-bottom border-bottom-lg-0">
                                <Link
                                    className="nav-link lh-1 py-0 fs--1 fw-bold py-3 active"
                                    aria-current="page"
                                    to="#"
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            {/* <li className="nav-item border-bottom border-bottom-lg-0">
                                <Link className="nav-link lh-1 py-0 fs--1 fw-bold py-3" to="#feature">
                                    Features
                                </Link>
                            </li> */}
                            <li className="nav-item border-bottom border-bottom-lg-0">
                                <Link className="nav-link lh-1 py-0 fs--1 fw-bold py-3" to="#blog">
                                    Nhà hàng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link lh-1 py-0 fs--1 fw-bold py-3" to="#team">
                                    Nhóm
                                </Link>
                            </li>
                        </ul>
                        <div className="d-grid d-lg-flex align-items-center">
                            <div className="nav-item d-flex align-items-center d-none d-lg-block pe-2">
                                <div className="theme-control-toggle fa-icon-wait px-2">
                                    <ThemeSwitcher />
                                </div>
                            </div>
                            <Link
                                className="text-700 hover-text-1100 px-2 d-none d-lg-inline lh-sm"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#searchBoxModal"
                            >
                                <Search width={20} height={20} />
                            </Link>
                            <Link
                                className="btn btn-link text-900 order-1 order-lg-0 ps-3 me-2"
                                to={"/auth/signin"}
                            >
                                Đăng Nhập
                            </Link>
                            <Link
                                className="btn btn-phoenix-primary order-0"
                                to={"/auth/signup"}
                            >
                                <span className="fw-bold">Đăng ký</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <ModalSearch />
        </>
    )
}

export default NavbarLandingPage