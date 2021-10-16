import React, { Component } from 'react';
import Contacts from './components/Contacts.js';
import Header from './components/Header.js';
import {Provider} from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header brandName="My Contact Manager"/>
        <Contacts />
        
      </div>

      </Provider>
    )
  }
}


export default App;
