import React, { Component } from 'react';
import AppContainer from './AppContainer'
import { Provider } from 'react-redux';
import logger from 'redux-logger'
// import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { api } from './components/api'

const store = createStore(
  appReducers,
  applyMiddleware(logger),
)
class App extends Component {
  constructor(props) {
    super(props);
    api.setStore(store)

  }
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }

}

export default App;
