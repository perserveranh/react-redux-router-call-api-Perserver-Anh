import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { api, dataService } from '../../components/api'

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtDescription: '',
            txtPrice: '',
            chkbStatus: false
        };
    }

    componentWillMount() {
        var { match } = this.props;
        if (match) { // update
            var id = match.params.id;

            dataService.actGetProductRequest(id)
        } // else => add
    }

    componentWillReceiveProps(nextProps) {
        console.log({ nextProps })
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            console.log({ itemEditing })
            this.setState({
                id: itemEditing.products.id,
                txtName: itemEditing.products.name,
                txtDescription: itemEditing.products.description,
                txtPrice: itemEditing.products.price,
                chkbStatus: itemEditing.products.status
            })
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtDescription, txtPrice, chkbStatus } = this.state;
        var product = {
            id: id,
            name: txtName,
            description: txtDescription,
            price: txtPrice,
            status: chkbStatus
        };
        if (id) {
            dataService.actUpdateProductRequest(product);
        } else {
            dataService.actAddProductRequest(product);
        }
        this.props.history.goBack();
    }

    render() {
        var { txtName, txtDescription, txtPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onSubmit}>
                            <legend>* Vui lòng nhập đầy đủ thông tin</legend>
                            <div className="form-group">
                                <label>Tên Sản Phẩm: </label>
                                <input onChange={this.onChange} value={txtName} name="txtName" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mô Tả Sản Phẩm: </label>
                                <textarea onChange={this.onChange} value={txtDescription} name="txtDescription" className="form-control" rows="3">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Giá: </label>
                                <input onChange={this.onChange} value={txtPrice} name="txtPrice" type="number" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Tình Trạng: </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input checked={chkbStatus} onChange={this.onChange} value={chkbStatus} type="checkbox" name="chkbStatus" />
                                    Còn Hàng
                                </label>
                            </div>
                            <Link to="/product-list" className="btn btn-danger mr-5">
                                <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                            </Link>
                            <button type="submit" className="btn btn-primary">
                                <i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}


export default connect(mapStateToProps)(ProductActionPage);
