
var initialState = '';
var search = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            console.log({ action })
            return action.keyword;
        default:
            return state;
    }
};

export default search;