export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS"
export const GET_MOVIES = "GET_MOVIES"


export const getMoviesSuccess =(payload) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload
    };
};

export const getMovies =()=> async (dispatch) => {
    try {
        let res = await fetch(`http://localhost:8080/movies`);
        let data = await res.json()
        dispatch(getMoviesSuccess(data));
    } catch (error) {
        console.log(error)
    }
};
