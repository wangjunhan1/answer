import React, { Component, Fragment } from 'react';
import { iconfont } from './static/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <iconfont />
        <Header />
      </Fragment>
    );
  }
}

export default App;
