import React from 'react'
import { useSelector } from 'react-redux';
import ThemeSwitcher from './ThemeSwitcher';

function TopNavSlim({ styled }) {


  return (
    <nav
      className={`navbar navbar-top navbar-slim fixed-top navbar-expand ${styled === 'darker' ? 'navbar-darker' : ''}`}
      id="topNavSlim"
    >
      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <button
            className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarVerticalCollapse"
            aria-controls="navbarVerticalCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line" />
            </span>
          </button>
          <a className="navbar-brand navbar-brand" href="index.html">
            phoenix
            <span className="text-1000 d-none d-sm-inline">slim</span>
          </a>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
              <ThemeSwitcher />
            </div>
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#searchBoxModal"
            >
              <span data-feather="search" style={{ height: 12, width: 12 }} />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              id="navbarDropdownNotification"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span data-feather="bell" style={{ height: 12, width: 12 }} />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret"
              id="navbarDropdownNotfication"
              aria-labelledby="navbarDropdownNotfication"
            >
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-black mb-0">Notificatons</h5>
                    <button
                      className="btn btn-link p-0 fs--1 fw-normal"
                      type="button"
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="assets/img/team/40x40/30.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">💬</span>Mentioned you
                                in a comment.
                                <span className="ms-2 text-400 fw-bold fs--2">
                                  10m
                                </span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:41 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-stop-propagation="data-stop-propagation"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle">
                                <span>J</span>
                              </div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jane Foster</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">📅</span>Created an
                                event.
                                <span className="ms-2 text-400 fw-bold fs--2">
                                  20m
                                </span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:20 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-stop-propagation="data-stop-propagation"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle avatar-placeholder"
                                src="assets/img/team/40x40/avatar.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">👍</span>Liked your
                                comment.
                                <span className="ms-2 text-400 fw-bold fs--2">
                                  1h
                                </span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">9:30 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-stop-propagation="data-stop-propagation"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="assets/img/team/40x40/57.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Kiera Anderson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">💬</span>Mentioned you
                                in a comment.
                                <span className="ms-2 text-400 fw-bold fs--2" />
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">9:11 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-stop-propagation="data-stop-propagation"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="assets/img/team/40x40/59.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Herman Carter</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">👤</span>Tagged you in
                                a comment.
                                <span className="ms-2 text-400 fw-bold fs--2" />
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:58 PM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-stop-propagation="data-stop-propagation"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="assets/img/team/40x40/58.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Benjamin Button</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">👍</span>Liked your
                                comment.
                                <span className="ms-2 text-400 fw-bold fs--2" />
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:18 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-stop-propagation="data-stop-propagation"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-0">
                  <div className="my-2 text-center fw-bold fs--2 text-600">
                    <a className="fw-bolder" href="pages/notifications.html">
                      Notification history
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              id="navbarDropdownNindeDots"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="../../../www.w3.org/2000/svg.html"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
                <circle cx={2} cy={8} r={2} fill="currentColor" />
                <circle cx={2} cy={14} r={2} fill="currentColor" />
                <circle cx={8} cy={8} r={2} fill="currentColor" />
                <circle cx={8} cy={14} r={2} fill="currentColor" />
                <circle cx={14} cy={8} r={2} fill="currentColor" />
                <circle cx={14} cy={14} r={2} fill="currentColor" />
                <circle cx={8} cy={2} r={2} fill="currentColor" />
                <circle cx={14} cy={2} r={2} fill="currentColor" />
              </svg>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300"
              aria-labelledby="navbarDropdownNindeDots"
            >
              <div className="card bg-white position-relative border-0">
                <div
                  className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
                  style={{ height: "20rem" }}
                >
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/behance.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Behance
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/google-cloud.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Cloud
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/slack.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Slack
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/gitlab.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Gitlab
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/bitbucket.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          BitBucket
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/google-drive.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Drive
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/trello.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Trello
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/figma.webp"
                          alt=""
                          width={20}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Figma
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/twitter.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Twitter
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/pinterest.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Pinterest
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img src="assets/img/nav-icons/ln.webp" alt="" width={30} />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Linkedin
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/google-maps.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Maps
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/google-photos.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Photos
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        href="#!"
                      >
                        <img
                          src="assets/img/nav-icons/spotify.webp"
                          alt=""
                          width={30}
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Spotify
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link lh-1 pe-0 white-space-nowrap"
              id="navbarDropdownUser"
              href="#!"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Olivia <span className="fa-solid fa-chevron-down fs--2" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
              aria-labelledby="navbarDropdownUser"
            >
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <img
                        className="rounded-circle "
                        src="assets/img/team/72x72/57.webp"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3">
                    <input
                      className="form-control form-control-sm"
                      id="statusUpdateInput"
                      type="text"
                      placeholder="Update your status"
                    />
                  </div>
                </div>
                <div
                  className="overflow-auto scrollbar"
                  style={{ height: "10rem" }}
                >
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span className="me-2 text-900" data-feather="user" />
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span className="me-2 text-900" data-feather="pie-chart" />
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span className="me-2 text-900" data-feather="lock" />
                        Posts &amp; Activity
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span className="me-2 text-900" data-feather="settings" />
                        Settings &amp; Privacy{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span
                          className="me-2 text-900"
                          data-feather="help-circle"
                        />
                        Help Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span className="me-2 text-900" data-feather="globe" />
                        Language
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item">
                      <a className="nav-link px-3" href="#!">
                        <span className="me-2 text-900" data-feather="user-plus" />
                        Add another account
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className="px-3">
                    {" "}
                    <a
                      className="btn btn-phoenix-secondary d-flex flex-center w-100"
                      href="#!"
                    >
                      <span className="me-2" data-feather="log-out">
                        {" "}
                      </span>
                      Sign out
                    </a>
                  </div>
                  <div className="my-2 text-center fw-bold fs--2 text-600">
                    <a className="text-600 me-1" href="#!">
                      Privacy policy
                    </a>
                    •
                    <a className="text-600 mx-1" href="#!">
                      Terms
                    </a>
                    •
                    <a className="text-600 ms-1" href="#!">
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default TopNavSlim