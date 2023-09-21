import React from "react";

const InputField = ({ label, type, id, placeholder, iconClass, ...props }) => {
    return (
        <div className="mb-3 text-start">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div className="form-icon-container">
                <input
                    className="form-control form-icon-input"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...props} // Copy tất cả các prop khác vào phần tử <input>
                />
                <span className={`fas ${iconClass} text-900 fs--1 form-icon`} />
            </div>
        </div>
    );
};

export default InputField;
