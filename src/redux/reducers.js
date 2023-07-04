import { SET_PHOENIX_IS_NAVBAR_VERTICAL_COLLAPSED, SET_PHOENIX_IS_RTL, SET_PHOENIX_NAVBAR_POSITION, SET_PHOENIX_NAVBAR_TOP_SHAPE, SET_PHOENIX_NAVBAR_TOP_STYLE, SET_PHOENIX_NAVBAR_VERTICAL_STYLE, SET_PHOENIX_SUPPORT_CHAT } from "./ActionTypes";

// redux/reducers/navbarReducer.js
const initialState = {
    phoenixNavbarVerticalStyle: 'default',
    phoenixNavbarPosition: 'vertical',
    phoenixNavbarTopShape: 'default',
    phoenixNavbarTopStyle: 'default',
    phoenixIsNavbarVerticalCollapsed: false,
    phoenixSupportChat: false,
    phoenixIsRTL: false,
};
const rootReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOENIX_NAVBAR_VERTICAL_STYLE:
            // if (state.phoenixNavbarPosition === 'vertical' && state.phoenixTheme === 'light') {
            //     return {
            //         ...state,
            //         phoenixNavbarVerticalStyle: action.payload === 'darker' ? 'darker' : 'default'
            //     };
            // }
            // if (state.phoenixNavbarPosition === 'vertical' && state.phoenixTheme === 'dark') {
            //     return {
            //         ...state,
            //         phoenixNavbarVerticalStyle: action.payload === 'lighter' ? 'lighter' : 'default'
            //     };
            // }
            return {
                ...state,
                phoenixNavbarVerticalStyle: action.payload
            };

        case SET_PHOENIX_NAVBAR_POSITION:
            return {
                ...state,
                phoenixNavbarPosition: action.payload
            };
        case SET_PHOENIX_NAVBAR_TOP_SHAPE:
            // if (state.phoenixNavbarPosition === 'dual-nav') {
            //     return {
            //         ...state,
            //         phoenixNavbarTopShape: 'default'
            //     };
            // }
            return {
                ...state,
                phoenixNavbarTopShape: action.payload
            };
        case SET_PHOENIX_NAVBAR_TOP_STYLE:
            return {
                ...state,
                phoenixNavbarTopStyle: action.payload
            };
        case SET_PHOENIX_IS_NAVBAR_VERTICAL_COLLAPSED:
            return {
                ...state,
                phoenixIsNavbarVerticalCollapsed: !state.phoenixIsNavbarVerticalCollapsed
            };
        case SET_PHOENIX_IS_RTL:
            return {
                ...state,
                phoenixIsRTL: !state.phoenixIsRTL
            }
            break;
        case SET_PHOENIX_SUPPORT_CHAT:
            return {
                ...state,
                phoenixSupportChat: !state.phoenixSupportChat
            };
        default:
            return state;
    }
};


export default rootReducers;
