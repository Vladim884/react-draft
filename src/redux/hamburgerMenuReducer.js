import {ON_CLICK_HAMBURGER_MENU, ON_CLICK_MENU_CLOSE} from './types'

const initialState = {
    classMenu: 'hide_menu',
}

const hamburgerMenuReducer = (state=initialState, action) => {
    switch (action.type) {
        case ON_CLICK_HAMBURGER_MENU:
            return {
                ...state,
                classMenu: 'show_menu'
            }
        case ON_CLICK_MENU_CLOSE:
            return {
                ...state,
                classMenu: 'hide_menu'
            }
        default:
            return state;
    }
}

export default hamburgerMenuReducer;