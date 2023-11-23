import React from 'react'
import RegistrationFormStep1 from './RegistrationFormStep1'

function RegistrationForm() {
  return (
    <>
        <div className='container-registration' style={{background: '#FFF', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center'}}>
            <RegistrationFormStep1/>
        </div>
    </>
  )
}

export default RegistrationForm