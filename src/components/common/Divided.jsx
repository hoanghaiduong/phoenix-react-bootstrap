import React from "react";

const DividerWithTitle = ({ title, classBgColor }) => {
    return (
        <div className="position-relative">
            <hr className="bg-200 mt-5 mb-4" />
            <div className={`divider-content-center ${classBgColor}`}>{title}</div>
        </div>
    );
};

export default DividerWithTitle;
