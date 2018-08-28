

var initialState = {
    products: [],
    id: 0
}

const products = (state = initialState, action) => {
    let products = [...state.products];
    var index = -1;
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            // console.log({ action })
            return Object.assign({}, state, { products: action.product });
        case 'ADD_PRODUCT':
            // console.log({ action })

            products.push(action.product);
            return { ...state, products };
        case 'UPDATE_PRODUCT':

            index = findIndex(state, action.product.id);
            products[index] = action.product;
            return { ...state, products };
        case 'DELETE_PRODUCT':
            // console.log({ action })
            // let products = [...state.products];
            index = findIndex(state, action.id.id);
            products.splice(index, 1);
            // console.log('tao test day', index)
            return { ...state, products };
        default: return state;
    }
};

var findIndex = (products, id) => {
    var result = -1;

    products.products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

export default products;