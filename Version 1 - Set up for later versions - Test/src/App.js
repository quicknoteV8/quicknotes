import React, { Component } from 'react';

import IndexPage from './pages/index.js'

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = { 
        notes: {
          1: {
            _id:1,
            title: "Test Note 1",
            body: "This is the body of the test note 1",
          },

          2: {
            _id:2,
            title: "Test Note 2",
            body: "This is the body of the test note 2",
          }
        },
      };
    }
    render() {
      return (
          <div>
            <IndexPage notes = {this.state.notes}></IndexPage>
          </div>
      );
    }
}
  
export default App;
  

