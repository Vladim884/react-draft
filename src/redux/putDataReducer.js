import { PUT_DATA } from "./types";

const initialState = {
    data: {}
}

export const putDataReducer = (state=initialState, action) => {
    switch (action.type) {
        case PUT_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}