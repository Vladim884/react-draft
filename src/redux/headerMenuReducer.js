const BUTTON_MENU_CLICKED = 'BUTTON_MENU_CLICKED';
const BUTTON_MENU_RECLICKED = 'BUTTON_MENU_RECLICKED';


const initialState = {
    classMenu: 'hide_menu',
    width: 0
}

const headerMenuReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUTTON_MENU_CLICKED:
            return {
                ...state,
                classMenu: 'show_menu'
            }
        case BUTTON_MENU_RECLICKED:
            return {
                ...state,
                classMenu: 'hide_menu'
            }
        default:
            return state;
    }
}

export const buttonMenuClicked = () => ({type: BUTTON_MENU_CLICKED});
export const buttonMenuReClicked = () => ({type: BUTTON_MENU_RECLICKED});



export default headerMenuReducer;