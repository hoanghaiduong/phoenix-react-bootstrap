import React from 'react';

function FacebookButton({ buttonText }) {
    const handleFacebookSignIn = () => {
    };

    return (
        <button className="btn btn-phoenix-secondary w-100" onClick={handleFacebookSignIn}>
            <span className="fab fa-facebook text-primary me-2 fs--1" />
            {buttonText}
        </button>
    );
}

export default FacebookButton;