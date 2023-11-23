import { SET_PHOENIX_IS_NAVBAR_VERTICAL_COLLAPSED, SET_PHOENIX_IS_RTL, SET_PHOENIX_NAVBAR_POSITION, SET_PHOENIX_NAVBAR_TOP_SHAPE, SET_PHOENIX_NAVBAR_TOP_STYLE, SET_PHOENIX_NAVBAR_VERTICAL_STYLE, SET_PHOENIX_SUPPORT_CHAT, SET_PHOENIX_THEME, SET_USER_INFO, } from "./ActionTypes";


// Action creators
export const setPhoenixNavbarVerticalStyle = (style) => ({
    type: SET_PHOENIX_NAVBAR_VERTICAL_STYLE,
    payload: style,
});
export const setPhoenixSupportChat = () => ({
    type: SET_PHOENIX_SUPPORT_CHAT,
})
export const setPhoenixVerticalNavbarCollapse = () => ({
    type: SET_PHOENIX_IS_NAVBAR_VERTICAL_COLLAPSED,
})
export const setPhoenixIsRTL = () => ({
    type: SET_PHOENIX_IS_RTL,
});
export const setPhoenixTheme = (action) => ({
    type: SET_PHOENIX_THEME,
    payload: action
});
export const setPhoenixNavbarPosition = (position) => ({
    type: SET_PHOENIX_NAVBAR_POSITION,
    payload: position,
});

export const setPhoenixNavbarTopShape = (shape) => ({
    type: SET_PHOENIX_NAVBAR_TOP_SHAPE,
    payload: shape,
});

export const setPhoenixNavbarTopStyle = (style) => ({
    type: SET_PHOENIX_NAVBAR_TOP_STYLE,
    payload: style,
});

export const setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    payload: userInfo
});

export const setPhoenixNavbarVerticalStyleAction = (action) => {
    return (dispatch) => {
        // Thực hiện action setPhoenixTheme để thay đổi Redux store
        dispatch(setPhoenixNavbarVerticalStyle(action));
    };
}

export const setPhoenixNavbarTopStyleAction = (action) => {
    return (dispatch) => {
        // Thực hiện action setPhoenixTheme để thay đổi Redux store
        dispatch(setPhoenixNavbarTopStyle(action));
    };
}
export const setPhoenixNavbarPositionAction = (action) => {
    return (dispatch) => {
        // Thực hiện action setPhoenixTheme để thay đổi Redux store
        dispatch(setPhoenixNavbarPosition(action));

        const element = document.documentElement.classList;
        element.remove('navbar-vertical', 'navbar-horizontal', 'navbar-combo', 'dual-nav');

        switch (action) {
            case 'vertical':
                element.add('navbar-vertical');
                break;
            case 'horizontal':
                element.add('navbar-horizontal');
                break;
            case 'combo':
                element.add('navbar-combo');
                break;
            case 'dual-nav':
                element.add('dual-nav');
                break;
            default:
                break;
        }
    };
};

export const setPhoenixNavbarTopShapeAction = (action) => {
    return (dispatch) => {
        // Thực hiện action setPhoenixTheme để thay đổi Redux store
        dispatch(setPhoenixNavbarTopShape(action));
    };
}
export const setPhoenixVerticalNavbarCollapseAction = () => {
    return (dispatch, getState) => {
        // Toggle the phoenixIsNavbarVerticalCollapsed state directly in the Redux store
        dispatch(setPhoenixVerticalNavbarCollapse());

        const state = getState(); // Get the current Redux state
        const isCollapsed = state.phoenixIsNavbarVerticalCollapsed;
        const navbarType = state.phoenixNavbarPosition;

        // Handle classList toggling based on the phoenixIsNavbarVerticalCollapsed state
        const element = document.documentElement.classList;
        element.remove('navbar-vertical', 'navbar-vertical-collapsed', 'navbar-combo');
        if (isCollapsed) {
            if (navbarType === 'combo') {
                element.add('navbar-combo')
            }
            element.add('navbar-vertical-collapsed');
        } else {
            element.add(`navbar-${navbarType}`);
        }
    };
};

export const setPhoenixIsRTLAction = () => {
    return (dispatch, getState) => {
        dispatch(setPhoenixIsRTL());
        const state = getState(); // Get the current Redux state
        const { phoenixIsRTL } = state;
        // Thực hiện action setPhoenixTheme để thay đổi Redux store
        const linkDefault = document.getElementById('style-default');
        const linkRTL = document.getElementById('style-rtl');

        if (phoenixIsRTL) {
            linkDefault.setAttribute('disabled', true);
            linkRTL.setAttribute('disabled', false);
            document.querySelector('html').setAttribute('dir', 'rtl');
        } else {
            linkDefault.setAttribute('disabled', false);
            linkRTL.setAttribute('disabled', true);
            document.querySelector('html').setAttribute('dir', 'ltr');
        }
    };
}
export const setPhoenixThemeAction = (action) => {
    return (dispatch) => {
        dispatch(setPhoenixTheme(action));
        var element = document.documentElement.classList;
        element.remove('dark')
        if (action === "dark") {
            element.add('dark');
        }
    }
}
export const setUserInfoAction = (action) => {
    return (dispatch) => {
        dispatch(setUserInfo(action));
    };
}