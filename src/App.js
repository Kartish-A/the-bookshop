import React from 'react';
import Header from './Header';
import {Books} from './Books';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends React.Component {
  state = {}
  render() {
    return (
      <div className='main'>
        <Header />
        <Books />
      </div>

    );
  }
}

export default App;