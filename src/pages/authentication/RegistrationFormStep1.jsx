import React from 'react'
import '../../assets/css/registration.css'

function RegistrationFormStep1() {
  return (
    <>
        <div className="registration">
            <div className="registration-title">
                <h1>Registration Form</h1>
                <h3>Please fill out this form with the required information</h3>
            </div>
            <div className="registration-step">
                <hr />
                <div className="registration-step-1">
                    <div className="registration-step-1-child">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <circle cx="16.25" cy="16" r="15.5" fill="#B991FF" stroke="#B991FF"/>
                        </svg>
                        <span>1</span>
                        <div className="registration-step-1-child-content">
                            Account Type
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegistrationFormStep1