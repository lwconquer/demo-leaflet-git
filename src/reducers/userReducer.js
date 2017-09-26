const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    comment:"",
    error: null
};

export default (state = initialState, action) => {
    if (action.type === "FETCH_USERS_START")
        state = { ...state, fetching: true };
    else if (action.type === "FETCH_USERS_ERROR")
        state = { ...state, fetching: false, error: action.payload };
    else if (action.type === "RECEIVE_USERS")
        state = { ...state, fetching: false, fetched: true, users: action.payload };
    return state;
};
