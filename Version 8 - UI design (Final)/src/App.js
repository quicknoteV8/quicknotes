import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import NewNotePage from './pages/new.js';
import IndexPage from './pages/index.js';
import ShowPage from './pages/show.js';
import EditNotePage from './pages/edit.js';

import DB from './db.js';

import './styles/app.css'

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

    async handleDelete(id) {
      let { notes } = this.state;
      let note = notes[id];
  
      if (notes[id] && window.confirm("Are you sure you want to delete this note?")) {
        await this.state.db.deleteNote(note);
  
        delete notes[id];
        
        this.setState({ notes });
      }
    }

    renderContent(){
      return (
          <div className="app-content">
              <Route exact path = "/" component = {(props) => 
                <IndexPage {...props} notes = {this.state.notes} />} />
              <Route exact path="/notes/:id" component={(props) => (
                <ShowPage {...props} note={this.state.notes[props.match.params.id]} onDelete={(id) => this.handleDelete(id) }/>) } />
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
        <div className="App">
          <NavBar/>
          { this.renderContent() }
        </div>
      </Router>
    );
  }
}

export default App;