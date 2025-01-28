import { SET_USER } from "../actions";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state: any, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};
