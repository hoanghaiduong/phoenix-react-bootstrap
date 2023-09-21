import React from 'react'
import { Link } from 'react-router-dom'

function InternalServer() {
    return (
        <div className="px-3">
            <div className="row min-vh-100 flex-center p-5">
                <div className="col-12 col-xl-10 col-xxl-8">
                    <div className="row justify-content-center g-5">
                        <div className="col-12 col-lg-6 text-center order-lg-1">
                            <img
                                className="img-fluid w-lg-100 d-light-none"
                                src="../../assets/img/spot-illustrations/500-illustration.png"
                                alt=""
                                width={400}
                            />
                            <img
                                className="img-fluid w-md-50 w-lg-100 d-dark-none"
                                src="../../assets/img/spot-illustrations/dark_500-illustration.png"
                                alt=""
                                width={540}
                            />
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <img
                                className="img-fluid mb-6 w-50 w-lg-75 d-dark-none"
                                src="../../assets/img/spot-illustrations/500.png"
                                alt=""
                            />
                            <img
                                className="img-fluid mb-6 w-50 w-lg-75 d-light-none"
                                src="../../assets/img/spot-illustrations/dark_500.png"
                                alt=""
                            />
                            <h2 className="text-800 fw-bolder mb-3">Unknow error!</h2>
                            <p className="text-900 mb-5">
                                But relax! Our cat is here to play you some music.
                            </p>
                            <Link className="btn btn-lg btn-primary" to={"/home"}>
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InternalServer