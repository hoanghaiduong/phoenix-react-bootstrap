import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPhoenixVerticalNavbarCollapse, setPhoenixVerticalNavbarCollapseAction } from '../../redux/Actions';

function NavbarVerticalFooter() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    // const isCollapsed = selector.phoenixIsNavbarVerticalCollapsed;
    // const navbarType = selector.phoenixNavbarPosition;
    const handleChangeCollapse = () => {

        dispatch(setPhoenixVerticalNavbarCollapseAction());
        // const element = document.documentElement.classList;
        // console.log(navbarType)
        // if (isCollapsed) {
        //     if (element.contains('navbar-vertical')) {
        //         element.remove('navbar-vertical');
        //     }

        //     element.add(`navbar-vertical-collapsed`);
        // }
        // else {
        //     element.remove('navbar-vertical-collapsed');
        //     element.add(`navbar-${navbarType}`);
        // }


    }
    return (
        <div className="navbar-vertical-footer">
            <button className="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center" onClick={handleChangeCollapse}>
                <span className="uil uil-left-arrow-to-left fs-0" />
                <span className="uil uil-arrow-from-right fs-0" />
                <span className="navbar-vertical-footer-text ms-2">Collapsed View</span>
            </button>
        </div>
    )
}

export default NavbarVerticalFooter