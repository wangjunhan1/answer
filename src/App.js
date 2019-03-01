import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Iconfont } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Iconfont />
        <Header />
      </Provider>
    );
  }
}

export default App;
