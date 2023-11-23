import React from 'react'
import GoogleButton from './GoogleButton'
import FacebookButton from './FacebookButton'

function AuthRightCard({ title, description, imgSrc, children }) {
  return (
    <div className="col mx-auto">
      <div className="auth-form-box">
        <div className="text-center mb-7">
          <a
            className="d-flex flex-center text-decoration-none mb-4"
            href="../../../index.html"
          >
            <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
              <img
                src={imgSrc}//../../../assets/img/icons/logo.png
                // alt="phoenix"
                width={198}
              />
            </div>
          </a>
          <h3 className={`text-1000`}>{title}</h3>
          <p className="text-700">{description}</p>
        </div>
        <GoogleButton buttonText={title + " Với Google"} />
        <FacebookButton buttonText={title + " Với FaceBook"} />
        {children}
      </div>
    </div>
  )
}

export default AuthRightCard