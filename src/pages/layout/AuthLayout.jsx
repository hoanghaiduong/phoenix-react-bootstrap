import React from 'react'


function AuthLayout({ children ,backgroundImageURL}) {
    return (
        <div className="container-fluid bg-300 dark__bg-1200">
            <div
                className="bg-holder bg-auth-card-overlay"
                style={{ backgroundImage: `${backgroundImageURL}` }}
            />
            {/*/.bg-holder*/}
            <div className="row flex-center position-relative min-vh-100 g-0 py-5">
                <div className="col-11 col-sm-10 col-xl-8">
                    <div className="card border border-200 auth-card">
                        <div className="card-body pe-md-0">
                            <div className="row align-items-center gx-0 gy-7">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout