import React, { Component } from 'react';
import './ProductListPage.css';
import { Link } from 'react-router-dom';
import { dataService, api } from '../../components/api'

import { connect } from 'react-redux';
// import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            filterName: '',
            filterStatus: -1
        }
    }
    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        dataService.actFetchProductsRequest();
    }
    onHandleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        };
        api.filterTable(filter)
        this.setState({
            [name]: value
        });
    }
    onClick = (sortBy, sortValue) => {
        api.sort({
            by: sortBy,
            value: sortValue
        })
    }

    onSearch = () => {
        api.search(this.state.keyword);
    }

    //   className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}
    //  className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : ''}
    //   className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : ''}
    render() {
        var { products, filterTable, sort, search } = this.props;
        products = this.props.products.products;
        // filter
        if (filterTable.name) {
            products = products.filter((product) => {
                return product.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
            });
        }
        products = products.filter((product) => {
            if (filterTable.status === -1) {
                return product;
            } else {
                return product.status
                    === (filterTable.status === 1 ? true : false);
            }
        });
        // sort
        if (sort.by === 'name') {
            products.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            products.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }

        // search
        products = products.filter((product) => {
            return product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" className="btn btn-primary mb-5">
                            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                        <div className="vc-empty-space hiden-xs" style={{ height: "30px" }}>
                            <span className="vc-empty-space-inner" />
                        </div>
                        <div className="input-group">
                            <input
                                name="keyword"
                                value={this.state.keyword}
                                type="text"
                                className="form-control"
                                placeholder="Nhập từ khóa..."
                                onChange={this.onHandleChange}
                            />
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                                    <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                            </span>
                        </div>
                        <div className="vc-empty-space hiden-xs" style={{ height: "30px" }}>
                            <span className="vc-empty-space-inner" />
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li onClick={() => this.onClick('name', 1)}>
                                    <a
                                        role="button"

                                    >
                                        <span className="fa fa-sort-alpha-asc pr-5">
                                            Tên A-Z
                                </span>
                                    </a>
                                </li>
                                <li onClick={() => this.onClick('name', -1)}>
                                    <a
                                        role="button"

                                    >
                                        <span className="fa fa-sort-alpha-desc pr-5">
                                            Tên Z-A
                                </span>
                                    </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li onClick={() => this.onClick('status', 1)}>
                                    <a
                                        role="button"

                                    >
                                        Trạng Thái Kích Hoạt
                            </a>
                                </li>
                                <li onClick={() => this.onClick('status', -1)}>
                                    <a
                                        role="button"

                                    >
                                        Trạng Thái Ẩn
                            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã SP</th>
                                            <th>Tên</th>
                                            <th>Mô Tả</th>
                                            <th>Giá</th>
                                            <th>Trạng Thái</th>
                                            <th>Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="filterName"
                                                    onChange={this.onChange}
                                                    value={this.state.filerName}
                                                />
                                            </td>
                                            <td></td>
                                            <td></td>

                                            <td>
                                                <select
                                                    className="form-control"
                                                    name="filterStatus"
                                                    onChange={this.onChange}
                                                    value={this.state.filterStatus}
                                                >
                                                    <option value={-1}>Tất Cả</option>
                                                    <option value={0}>Ẩn</option>
                                                    <option value={1}>Kích Hoạt</option>
                                                </select>
                                            </td>

                                        </tr>
                                        {this.showProducts(products)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    showProducts(products) {
        console.log({ products })
        var result = null;
        // var { onDeleteProduct } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem product={product} key={index} index={index} onDeleteProduct={api.onDeleteProduct} />
            });
        }
        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        filterTable: state.filterTable,
        products: state.products,
        sort: state.sort,
        search: state.search
    }
}
export default connect(mapStateToProps)(ProductListPage);
