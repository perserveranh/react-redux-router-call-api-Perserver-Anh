
let store = null
let host = null
const api = {

    setStore: (newstore) => {
        store = newstore
    },
    actFetchProducts: (product) => {
        store.dispatch({ type: 'FETCH_PRODUCTS', product })
    },
    actAddProduct: (product) => {

        store.dispatch({ type: 'ADD_PRODUCT', product })
    },
    actUpdateProduct: (product) => {
        console.log(product)
        store.dispatch({ type: 'UPDATE_PRODUCT', product })
    },
    actDeleteProduct: (id) => {
        store.dispatch({ type: 'DELETE_PRODUCT', id })
    },
    actGetProduct: (product) => {
        store.dispatch({ type: 'EDIT_PRODUCT', product })
    },
    getHost() {
        return host
    },
    filterTable: (filter) => {
        store.dispatch({ type: 'FILTER_TABLE', filter })
    },
    sort: (sort) => {
        store.dispatch({ type: 'SORT', sort })
    },
    search: (keyword) => {
        store.dispatch({ type: 'SEARCH', keyword })
    }


}
export default api;