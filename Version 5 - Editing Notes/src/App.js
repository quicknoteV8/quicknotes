import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import NewNotePage from './pages/new.js';
import IndexPage from './pages/index.js';
import ShowPage from './pages/show.js';
import EditNotePage from './pages/edit.js';

import DB from './db.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      
      let db = new DB('notedb')
      this.state = { 
        db,
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

    renderContent(){
      return (
          <div>
              <Route exact path = "/" component = {(props) => <IndexPage {...props} notes = {this.state.notes} />} />
              <Route exact path = "/notes/:id" component = {(props) => 
                <ShowPage {...props} note = {this.state.notes[props.match.params.id]} />} />
              <Route exact path = "/new" component = {(props) => 
                <NewNotePage {...props} onSave = {this.handleSave} />} />
               <Route path="/notes/:id/edit" component={(props) => (
                <EditNotePage {...props} note={this.state.notes[props.match.params.id]} onSave={(note) => this.handleSave(note, 'updateNote') }/>
          ) } />
          </div>
      );
    }

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          { this.renderContent() }
        </div>
      </Router>
    );
  }
}

export default App;