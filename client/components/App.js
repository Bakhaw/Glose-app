import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../stylesheets/index.scss';

class App extends Component {

  render() {
    return (
    <MuiThemeProvider>
      <div>
        <Header />
        <Books />
      </div>
    </MuiThemeProvider>
    );
  }

}

export default App;
