import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowPage extends React.Component {
   
    render() {
        const { note } = this.props;

        if (!note) {
            return null;
        }
        return (
            <div>
                <h1>{ note.title }</h1>
                <div>
                    <Link to={`/notes/${note._id}/edit`}>Edit</Link>
                </div>
                <div>{ note.body }</div>
            </div>
        )
    }
}
