import React from 'react'
import AuthLayout from '../layout/AuthLayout'
import AuthLeftCard from '../../components/Authentication/AuthLeftCard'
import AuthRightCard from '../../components/Authentication/AuthRightCard'
import DividerWithTitle from '../../components/common/Divided'

function SignIn() {
    return (
        <AuthLayout backgroundImageURL={`url(../../../assets/img/bg/37.png)`}>
            <AuthLeftCard
                title={"Đăng nhập"}
                titleClassStyle={'text-center'}
                description={"Vui lòng chọn phương thức đăng nhập hoặc đăng nhập với google"}
                backgroundImageUrl={"url(../../../assets/img/bg/38.png)"}
                names={[
                    'Tiện lợi', 'Nhanh Chóng', 'Uy Tín'
                ]}
                imageSrc={"../../../assets/img/spot-illustrations/auth.png"}
            />
            <AuthRightCard
                title={"Đăng Nhập"}
                description={"Điền vào biểu mẫu để đăng nhập tài khoản"}
                imgSrc={"../../../assets/img/icons/logo.png"}
            >
                <DividerWithTitle title={"Hoặc với Email"} classBgColor={"bg-white"} />
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="email">
                        Email address
                    </label>
                    <div className="form-icon-container">
                        <input
                            className="form-control form-icon-input"
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <span className="fas fa-user text-900 fs--1 form-icon" />
                    </div>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <div className="form-icon-container">
                        <input
                            className="form-control form-icon-input"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                        <span className="fas fa-key text-900 fs--1 form-icon" />
                    </div>
                </div>
                <div className="row flex-between-center mb-7">
                    <div className="col-auto">
                        <div className="form-check mb-0">
                            <input
                                className="form-check-input"
                                id="basic-checkbox"
                                type="checkbox"
                                defaultChecked="checked"
                            />
                            <label
                                className="form-check-label mb-0"
                                htmlFor="basic-checkbox"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <a
                            className="fs--1 fw-semi-bold"
                            href="forgot-password.html"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="btn btn-primary w-100 mb-3">Sign In</button>
                <div className="text-center">
                    <a className="fs--1 fw-bold" href="sign-up.html">
                        Create an account
                    </a>
                </div>
            </AuthRightCard>
        </AuthLayout>
    )
}

export default SignIn