import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ListNotes extends React.Component {
    renderNotes() {
        const notes = Object.values(this.props.notes)
        return (
            notes.map((n) => 
                <div>
                    <h3><Link to = {`/notes/${n._id}`}>{n.title}</Link></h3>
                </div>)
            );
    }
    render() {
        return (
            <div>
                {this.renderNotes()}
            </div>
        )
    }
}

