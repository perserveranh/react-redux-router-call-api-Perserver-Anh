import { request, api } from '../../api';

var dataService = {

    actFetchProductsRequest() {
        return request.callApi('/products', 'GET', null).then(res => {
            console.log({ res })
            api.actFetchProducts(res.data);
        });
    },
    actAddProductRequest(product) {
        return request.callApi('/products', 'POST', product).then(res => {

            api.actAddProduct(res.data)
        })
    },
    actUpdateProductRequest(product) {
        console.log({ product })
        return request.callApi(`/products/${product.id}`, 'PUT', product).then(res => {
            if (res) {
                api.actUpdateProduct(res.data)
            }
        })
    },
    actDeleteProductRequest(id) {
        return request.callApi(`/products/${id}`, 'DELETE', null).then(res => {

            api.actDeleteProduct(res.data)
        })
    },
    actGetProductRequest(id) {
        return request.callApi(`/products/${id}`, 'GET', null).then(res => {
            api.actGetProduct(res.data)
        })
    }
}

export default dataService;