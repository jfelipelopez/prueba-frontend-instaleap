export const Movies = (
    state = {
        movies:[]
    },
    action) => {
        switch (action.type) {
            case 'ADD_MOVIES':
                return {...state, isLoading: false, errMess: null, movies: action.payload.results};

            default:
                return state;
    }
};