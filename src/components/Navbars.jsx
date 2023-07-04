import { useSelector } from "react-redux";
import { useEffect } from "react";
import DualNavbar from "./Navbars/DualNavbar";
import NavbarComboSlim from "./Navbars/NavbarComboSlim";
import NavbarsTopSlim from "./Navbars/NavbarTopSlimz";
import NavbarCombo from "./Navbars/NavbarCombo";
import NavbarVertical from "./Navbars/NavbarVertical";
import NavbarDefault from "./Navbars/NavbarDefault";
import TopNavSlim from "./Navbars/TopNavSlim";
const Navbars = () => {
    const selector = useSelector(state => state);
    const { phoenixNavbarPosition, phoenixNavbarTopShape, phoenixNavbarTopStyle, phoenixNavbarVerticalStyle } = selector;
    useEffect(() => {
        if (phoenixNavbarPosition === 'dual-nav') {
            document.documentElement.classList.add(phoenixNavbarPosition)
        }
        else {
            document.documentElement.classList.add(`navbar-${phoenixNavbarPosition}`)
        }

    }, [])
    return (

        <>
            {phoenixNavbarPosition === 'dual-nav' && (
                <>
                    {/* Render các thành phần theo điều kiện dual-nav */}
                    <DualNavbar styled={phoenixNavbarTopStyle} />
                </>
            )}
            {phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'vertical' && (
                <>
                    {/* Render các thành phần theo điều kiện slim và vertical */}
                    <NavbarVertical styled={phoenixNavbarVerticalStyle} />
                    <NavbarDefault styled={phoenixNavbarTopStyle} />
                </>
            )}

            {phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'vertical' && (
                <>
                    {/* Render các thành phần theo điều kiện slim và vertical */}
                    <NavbarVertical styled={phoenixNavbarVerticalStyle} />
                    <TopNavSlim styled={phoenixNavbarTopStyle} />
                </>
            )}

            {phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'horizontal' && (
                <>
                    {/* Render các thành phần theo điều kiện slim và horizontal */}
                    <NavbarsTopSlim styled={phoenixNavbarTopStyle} />
                </>
            )}

            {phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'combo' && (
                <>
                    {/* Render các thành phần theo điều kiện slim và combo */}
                    <NavbarVertical styled={phoenixNavbarVerticalStyle} />
                    <NavbarComboSlim styled={phoenixNavbarTopStyle} />
                </>
            )}

            {phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'horizontal' && (
                <>
                    {/* Render các thành phần theo điều kiện default và horizontal */}
                    <NavbarsTopSlim styled={phoenixNavbarTopStyle} />
                </>
            )}

            {phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'combo' && (
                <>
                    {/* Render các thành phần theo điều kiện default và combo */}
                    <NavbarVertical styled={phoenixNavbarVerticalStyle} />
                    <NavbarCombo styled={phoenixNavbarTopStyle} />
                </>
            )}

         
        </>
    );
};

export default Navbars;