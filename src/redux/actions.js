import { LOAD_DATA, ON_CLICK_HAMBURGER_MENU, ON_CLICK_MENU_CLOSE, PUT_DATA } from "./types";

export const onClickHamburgerMenu = () => ({type: ON_CLICK_HAMBURGER_MENU});
export const onClickMenuClose = () => ({type: ON_CLICK_MENU_CLOSE});
export const putData = (dataFormServer) => ({type: PUT_DATA, payload: dataFormServer});


// export const loadData = () => (dispatch, getState) => {
//     console.log(getState());
//     fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//         dispatch(putData(json));
//     })
// }

export const loadData = () => ({type: LOAD_DATA});
