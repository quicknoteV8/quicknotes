import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js'
import NewNotePage from './pages/new.js'
import IndexPage from './pages/index.js'
import ShowPage from './pages/show.js'


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

    handleSave = (note) => {
      const ids = Object.keys(this.state.notes);
      const id = Math.max(...ids) + 1;
      
      note['_id'] = id
      
      const {notes} = this.state;
  
      this.setState({
        notes: {
          ...notes,
          [id]: note
        }
      })
  
      return id;
    }

    render() {
      return (
        <BrowserRouter>
          <div>
              <NavBar/>
              <Route exact path = "/" component = {(props) => <IndexPage {...props} notes = {this.state.notes} />} />
              <Route exact path = "/notes/:id" component = {(props) => 
                <ShowPage {...props} note = {this.state.notes[props.match.params.id]} />} />
              <Route exact path = "/new" component = {(props) => 
                <NewNotePage {...props} onSave = {this.handleSave} />} />
          </div>
        </BrowserRouter>
      );
    }
}
  
export default App;
  

