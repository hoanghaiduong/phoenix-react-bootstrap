import React from 'react'

function NotificationHeader() {
    return (
        <div className="row gy-3 mb-6 justify-content-between">
            <div className="col-md-9 col-auto">
                <h2 className="mb-2 text-1100">Projects Dashboard</h2>
                <h5 className="text-700 fw-semi-bold">
                    Here’s what’s going on at your business right now
                </h5>
            </div>
            <div className="col-md-3 col-auto">
                <div className="flatpickr-input-container">
                    <input
                        className="form-control ps-6 datetimepicker"
                        id="datepicker"
                        type="text"
                        data-options='{"dateFormat":"M j, Y","disableMobile":true,"defaultDate":"Mar 1, 2022"}'
                    />
                    <span className="uil uil-calendar-alt flatpickr-icon text-700" />
                </div>
            </div>
        </div>

    )
}

export default NotificationHeader