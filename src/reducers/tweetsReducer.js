const initialState = {
    tweets: []
};


export default (state = initialState, action) => {
    state = { ...state, tweets: [2, 1] };
    return state;
};