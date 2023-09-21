import React from 'react'

function ModalSearch() {
    return (
        <div className="modal fade" id="searchBoxModal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="true" data-phoenix-modal="data-phoenix-modal" style={{ "--phoenix-backdrop-opacity": 1 }}>
            <div className="modal-dialog">
                <div className="modal-content mt-15">
                    <div className="modal-body p-0">
                        <div className="chat-search-box">
                            <div className="form-icon-container">
                                <input
                                    className="form-control py-3 form-icon-input rounded-1"
                                    type="text"
                                    autoFocus="autofocus"
                                    placeholder="Search People, Groups and Messages"
                                />
                                <span className="fa-solid fa-magnifying-glass fs--1 form-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSearch