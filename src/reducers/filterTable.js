

var initialState = {
    name: '',
    status: -1
};
var filterTable = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_TABLE':
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            };
        default:
            return state;
    }
};

export default filterTable;