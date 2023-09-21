import React from 'react';

function AuthLeftCard({ title, titleClassStyle, description, names, backgroundImageUrl, imageSrc }) {
  return (
    <div className="col-auto bg-100 dark__bg-1100 rounded-3 position-relative overflow-hidden auth-title-box">
      <div
        className="bg-holder"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`
        }}
      />
      {/*/.bg-holder*/}
      <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7">
        <h3 className={`mb-3 text-black fs-1 ${titleClassStyle}`}>{title}</h3>
        <p className="text-700">{description}</p>
        <ul className="list-unstyled mb-0 w-max-content w-md-auto mx-auto">
          {names.map((name, index) => (
            <li key={index} className="d-flex align-items-center">
              <span className="uil uil-check-circle text-success me-2" />
              <span className="text-700 fw-semi-bold">{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="position-relative z-index--1 mb-6 d-none d-md-block text-center mt-md-15">
        <img
          className="auth-title-box-img d-dark-none"
          src={imageSrc}
          alt=""
        />
      </div>
    </div>
  );
}

export default AuthLeftCard;
