import React, { Component } from 'react';
import './App.css';
import AddressBookApp from './component/AddressBookApp';
class App extends Component {
  render() {
    return (
        <div className="container">
          <AddressBookApp />
        </div>
    );
  }
}
export default App;
