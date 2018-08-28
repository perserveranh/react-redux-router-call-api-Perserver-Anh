
var initialState = {
    products: []
};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PRODUCT':
            console.log({ action })
            return Object.assign({}, state, { products: action.product })
        default:
            return { ...state };
    }
}

export default itemEditing;