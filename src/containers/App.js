import React, { Component } from 'react';
import { LoginLayout } from '../components/Layout';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginLayout>
          <Login />
        </LoginLayout>
      </div>
    );
  }
}

export default App;
