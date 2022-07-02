import { GET_MOVIES_SUCCESS } from "./action";

const initState = {
    movies:[]
};


export const movieReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: payload
            };

        default:
            return state;
    }
};