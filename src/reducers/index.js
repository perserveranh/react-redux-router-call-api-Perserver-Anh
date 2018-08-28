import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import filterTable from './filterTable'
import sort from './sort'
import search from './search'

const appReducers = combineReducers({
    products,
    sort,
    itemEditing,
    filterTable,
    search
});

export default appReducers;