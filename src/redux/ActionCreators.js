export const fetchMovies = () => (dispatch) => {


    return fetch('https://run.mocky.io/v3/72f66f33-9186-4b20-a9a6-2c65661bc9cf')
    .then(
        response => {
            if (response.ok) {
                console.info(response);
                return response;
            }else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then(response => response.json())
    .then(movies => dispatch(addMovies(movies)))
    .catch(error => dispatch(moviesFailed(error.message)));
}

export const moviesFailed = (errmess) => ({
    type: 'MOVIES_FAILED',
    payload: errmess
});

export const addMovies = (movies) => ({
    type: 'ADD_MOVIES',
    payload: movies
});