import React, { useEffect, useRef } from 'react'
import { PieChart } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { setPhoenixVerticalNavbarCollapse } from '../../redux/Actions';

function NavbarVertical({ styled }) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const isCollapsed = selector.phoenixIsNavbarVerticalCollapsed;
    const handleChangeCollapse = () => {
        dispatch(setPhoenixVerticalNavbarCollapse());
        const element = document.documentElement.classList;
        //   const element=  document.documentElement.classList.toggle('navbar-vertical-collapsed');
        if (element.contains('navbar-vertical')) {
            element.replace('navbar-vertical','navbar-vertical-collapsed')
        }
        else
        {
            element.replace('navbar-vertical-collapsed','navbar-vertical')
        }
    }
    return (
        <nav
            className={`navbar navbar-vertical navbar-expand-lg ${styled === 'darker' ? 'navbar-darker' : ''}`}
        >
            <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                {/* scrollbar removed*/}
                <div className="navbar-vertical-content">
                    <ul className="navbar-nav flex-column" id="nav barVerticalNav">
                        <li className="nav-item">
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#home"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="home"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <PieChart size={16} />
                                        </span>
                                        <span className="nav-link-text">Home</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent show"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="home"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Home</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                href="index.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">E commerce</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="dashboard/project-management.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project management</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="apps/social/feed.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Social feed</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* label*/}
                            <p className="navbar-vertical-label">Apps</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#e-commerce"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="e-commerce"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="shopping-cart" />
                                        </span>
                                        <span className="nav-link-text">E commerce</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="e-commerce"
                                    >
                                        <li className="collapsed-nav-item-title d-none">E commerce</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#admin"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="e-commerce"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Admin</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent show"
                                                    data-bs-parent="#e-commerce"
                                                    id="admin"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/add-product.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Add product</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/products.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Products</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/customers.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Customers</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/customer-details.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Customer details
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/orders.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Orders</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/order-details.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Order details</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/admin/refund.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Refund</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#customer"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="e-commerce"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Customer</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent show"
                                                    data-bs-parent="#e-commerce"
                                                    id="customer"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/homepage.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Homepage</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/product-details.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Product details
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/products-filter.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Products filter
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/cart.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Cart</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/checkout.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Checkout</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/shipping-info.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Shipping info</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/profile.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Profile</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/favourite-stores.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Favourite stores
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/wishlist.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Wishlist</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/order-tracking.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Order tracking
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="apps/e-commerce/landing/invoice.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Invoice</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}

                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                                            {/* more inner pages*/}
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
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
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
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="navbar-vertical-footer">
                <button className="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center" onClick={handleChangeCollapse}>
                    <span className="uil uil-left-arrow-to-left fs-0" />
                    <span className="uil uil-arrow-from-right fs-0" />
                    <span className="navbar-vertical-footer-text ms-2">Collapsed View</span>
                </button>
            </div>
        </nav>

    )
}

export default NavbarVertical