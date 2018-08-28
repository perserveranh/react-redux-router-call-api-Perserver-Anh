
var initialState = {
    by: 'name',
    value: 1 // 1 : tăng, -1 : giảm
};
var sort = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT':
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default:
            return state;
    }
};

export default sort;