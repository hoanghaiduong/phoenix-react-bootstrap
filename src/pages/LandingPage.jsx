import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from '../components/Navbars/ThemeSwitcher'
import { Feather, Search } from "react-feather";
import NavbarLandingPage from '../components/Navbars/NavbarLandingPage';
import { useSelector } from 'react-redux';
function LandingPage() {
    const { phoenixTheme } = useSelector((state) => state);
    useEffect(() => { }, []);

    return (
        <main className="alternate-landing" style={{ "--phoenix-scroll-margin-top": "1.2rem" }}>
            <NavbarLandingPage />
            <section className="pb-8 overflow-hidden" id="home">
                <div className="hero-header-container-alternate position-relative">
                    <div className="container-small px-lg-7 px-xxl-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 pt-8 pb-6 position-relative z-index-5 text-center text-lg-start">
                                <h1 className="fs-5 fs-md-6 fs-xl-7 fw-black mb-4">
                                    <span className="text-gradient-info me-3">Restart</span>cho nhà hàng của bạn
                                </h1>
                                <p className="mb-5 pe-xl-10">
                                Hãy sử dụng dịch vụ của chúng tôi để quản lý nhà hàng của bạn.
                                </p>
                                <Link
                                    className="btn btn-lg btn-primary rounded-pill me-3"
                                    to="/auth/signup"
                                    role="button"
                                >
                                    Đăng ký ngay
                                </Link>

                            </div>
                            <div className="col-12 col-lg-auto d-none d-lg-block">
                                <div className="hero-image-container position-absolute h-100 end-0 d-flex align-items-center">
                                    <div className="position-relative">
                                        <div
                                            className="position-absolute end-0 hero-image-container-overlay"
                                            style={{ transform: "skewY(-8deg)." }}
                                        />
                                        <img
                                            className="position-absolute end-0 hero-image-container-bg"
                                            src="../../assets/img/bg/bg-36.png"
                                            alt=""
                                        />
                                        <img
                                            className="w-100 d-dark-none rounded-2 hero-image-shadow"
                                            src="../../assets/img/bg/bg.jpg"
                                            alt="hero-header"
                                        />
                                        <img
                                            className="w-100 d-light-none rounded-2 hero-image-shadow"
                                            src="../../assets/img/bg/bg-35.png"
                                            alt="hero-header"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-small px-md-8 mb-8 d-lg-none">
                        <div className="position-relative">
                            <div className="position-absolute end-0 hero-image-container-overlay" />
                            <img
                                className="position-absolute top-50 hero-image-container-bg"
                                src="../../assets/img/bg/bg-39.png"
                                alt=""
                            />
                            <img
                                className="img-fluid ms-auto d-dark-none rounded-2 hero-image-shadow"
                                src="../../assets/img/bg/bg-34.png"
                                alt="hero-header"
                            />
                            <img
                                className="img-fluid ms-auto d-light-none rounded-2 hero-image-shadow"
                                src="../../assets/img/bg/bg-35.png"
                                alt="hero-header"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-small px-lg-7 px-xxl-3">
                    <div className="row g-0">
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/netflix-n.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end-md">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/blender.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end border-end-md">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/upwork.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end-lg-0">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/facebook-f.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end border-bottom border-bottom-md-0">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/pocket.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end-md border-bottom border-bottom-md-0">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/mail-bluster-1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/discord.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end-lg-0">
                                <img
                                    className="img-fluid"
                                    src="../../assets/img/brand2/google-g.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of .container*/}
            </section>

        </main>
    )
}

export default LandingPage