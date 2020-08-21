const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'RATES_FETCH_REQUEST':
            return { ...state, loading: true };
        case 'RATES_FETCHED_SUCCESS':
            return { ...state, rates: action.rates, loading: false };
        case 'RATES_FETCHED_FAIL':
            return { ...state, err: action.err, loading: false };
        default:
            return state;
    }
};

export default reducer;
