import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import NewNotePage from './pages/new.js';
import IndexPage from './pages/index.js';
import ShowPage from './pages/show.js';

import DB from './db.js';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = { 
        db: new DB('notedb'),
        notes: [],
        loading: true
      };
    }

    async componentDidMount() {
      const notes = await this.state.db.getAllNotes();
  
      this.setState({
        notes,
        loading: false
      });
    }

    handleSave = async (note, method) => {
      let res = await this.state.db.createNote(note);
      let { notes } = this.state;
      
      note._id = res.id;
      note._rev = res.rev;
  
      this.setState({
        notes: { ...notes, [res.id]: note }
      });
  
      return res;
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