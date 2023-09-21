import React from 'react'

function GoogleButton({ buttonText }) {
    const handleGoogleSignIn = () => {
    };
    return (
        <button className="btn btn-phoenix-secondary w-100 mb-3" onClick={handleGoogleSignIn}>
            <span className="fab fa-google text-danger me-2 fs--1" />
            {buttonText}
        </button>
    )
}

export default GoogleButton