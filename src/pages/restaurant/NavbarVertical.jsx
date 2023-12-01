import React from 'react'
import { Home, PieChart, ShoppingCart, User } from 'react-feather'

import NavbarVerticalFooter from '../../components/Navbars/NavbarVerticalFooter';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, FileProtectOutlined } from '@ant-design/icons';

function NavbarVertical({ styled, target }) {
    return (
        <nav
            className={`navbar navbar-vertical navbar-expand-lg ${styled === 'darker' ? 'navbar-darker' : ''}`}
        >
            <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                {/* scrollbar removed*/}
                <div className="navbar-vertical-content">
                    <ul className="navbar-nav flex-column" id="nav barVerticalNav">
                        <li className="nav-item">
                        <p className="navbar-vertical-label">Product</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <Link
                                    className="nav-link dropdown-indicator label-1"
                                    to="/restaurant/products"
                                    style={{fontSize: '1.2em'}}
                                >
                                    <div className="d-flex align-items-center" style={target=="products"?{color: 'blue'} : {}}> 
                                        {/* <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div> */}
                                        <span className="nav-link-icon">
                                            <AppstoreOutlined size={18} />
                                        
                                        </span>
                                        <span className="nav-link-text">Products</span>
                                    </div>
                                </Link>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* label*/}
                            <p className="navbar-vertical-label">Contracts</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <Link
                                    className="nav-link dropdown-indicator label-1"
                                    to="/restaurant/contracts"
                                    style={{fontSize: '1.2em'}}
                                >
                                    <div className="d-flex align-items-center" style={target=="contracts"?{color: 'blue'} : {}}>
                                        {/* <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div> */}
                                        <span className="nav-link-icon">
                                            <FileProtectOutlined size={18} />
                                        </span>
                                        <span className="nav-link-text">Contracts</span>
                                    </div>
                                </Link>
                                
                            </div>
                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#CRM"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="CRM"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="phone" />
                                        </span>
                                        <span className="nav-link-text">CRM</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="CRM"
                                    >
                                        <li className="collapsed-nav-item-title d-none">CRM</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/analytics.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Analytics</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/deals.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Deals</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/deal-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Deal details</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/leads.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Leads</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/lead-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Lead details</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/reports.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Reports</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/reports-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Reports details</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/crm/add-contact.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Add contact</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#project-management"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="project-management"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="clipboard" />
                                        </span>
                                        <span className="nav-link-text">Project management</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="project-management"
                                    >
                                        <li className="collapsed-nav-item-title d-none">
                                            Project management
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/project-management/create-new.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Create new</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/project-management/project-list-view.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project list view</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/project-management/project-card-view.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project card view</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/project-management/project-board-view.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project board view</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/project-management/todo-list.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Todo list</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/project-management/project-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project details</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* parent pages*/}

                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#email"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="email"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="mail" />
                                        </span>
                                        <span className="nav-link-text">Email</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="email"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Email</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/email/inbox.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Inbox</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/email/email-detail.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Email detail</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/email/compose.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Compose</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#events"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="events"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="bookmark" />
                                        </span>
                                        <span className="nav-link-text">Events</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="events"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Events</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/events/create-an-event.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Create an event</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/events/event-detail.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Event detail</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#kanban"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="kanban"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="trello" />
                                        </span>
                                        <span className="nav-link-text">Kanban</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="kanban"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Kanban</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/kanban/kanban.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Kanban</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/kanban/boards.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Boards</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/kanban/create-kanban-board.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Create board</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#social"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="social"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="share-2" />
                                        </span>
                                        <span className="nav-link-text">Social</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="social"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Social</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/social/profile.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Profile</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/social/settings.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Settings</span>
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* parent pages*/}
                            {/* <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="apps/calendar.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="calendar" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Calendar</span>
                                        </span>
                                    </div>
                                </a>
                            </div> */}
                        </li>

                    </ul>
                </div>
            </div>
            <NavbarVerticalFooter />
        </nav>

    )
}

export default NavbarVertical