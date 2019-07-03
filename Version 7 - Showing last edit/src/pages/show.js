import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default class ShowPage extends React.Component {
   
    renderDate() {
        let date = dayjs(this.props.note.updatedAt)
        return date.format("MMMM D YYYY, HH:mm")
        }

    render() {
        const { note } = this.props;

        if (!note) {
            return null;
        }
        return (
            <div>
                <h1>{ note.title }</h1>
                <div>
                    {this.renderDate()}
                    <Link to={`/notes/${note._id}/edit`}>Edit</Link>
                    <button onClick={ (e) => this.props.onDelete(note._id) }>Delete</button>
                </div>
                <div>{ note.body }</div>
            </div>
        )
    }
}
