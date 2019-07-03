import React, { Component } from 'react'
import ListNotes from '../components/ListNotes.js';
import { Link } from 'react-router-dom'

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        let notes = Object.values(props.notes)
        notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        this.state = { notes };
    }

    render() {
        let { notes } = this.state;


        if (!notes.length) {
            return (
                <div className="app-intro">
                    <h2>Welcome to QuickNotes!</h2>
                    <p>You don't have any notes. <Link className="btn" to="/new">Get started!</Link></p>
                    <p>Dont worry about logging in, all your notes will be stored in your browser.</p>
                    <p>(Dont clear your browser cookies or your notes will be lost.</p>
                </div>
            );
        }

        return (
            <div>
                <h1>Notes</h1>
                <ListNotes notes={this.state.notes}/>
            </div>
        )
    }
}

export default IndexPage;
