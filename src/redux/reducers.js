import { SET_PHOENIX_IS_NAVBAR_VERTICAL_COLLAPSED, SET_PHOENIX_IS_RTL, SET_PHOENIX_NAVBAR_POSITION, SET_PHOENIX_NAVBAR_TOP_SHAPE, SET_PHOENIX_NAVBAR_TOP_STYLE, SET_PHOENIX_NAVBAR_VERTICAL_STYLE, SET_PHOENIX_SUPPORT_CHAT, SET_PHOENIX_THEME, SET_USER_INFO } from "./ActionTypes";

// redux/reducers/navbarReducer.js
const initialState = {
    phoenixNavbarVerticalStyle: 'default',
    phoenixNavbarPosition: 'vertical',
    phoenixNavbarTopShape: 'default',
    phoenixNavbarTopStyle: 'default',
    phoenixIsNavbarVerticalCollapsed: false,
    phoenixSupportChat: false,
    phoenixTheme: 'light',
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

        case SET_PHOENIX_SUPPORT_CHAT:
            return {
                ...state,
                phoenixSupportChat: !state.phoenixSupportChat
            };
        case SET_PHOENIX_THEME:
            return {
                ...state,
                phoenixTheme: action.payload
            }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state;
    }
};


export default rootReducers;
