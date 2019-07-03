import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

function renderDate(updatedAt) {
    let date = dayjs(updatedAt);
    return date.format("MMMM D YYYY, HH:mm");
}

const Note = ({ note: { _id, title, body, updatedAt } }) => (
    <div className="notes-list-item">
        <h2><Link to={`/notes/${_id}`}>{ title }</Link></h2>
        <span className="notes-list-date">
            { renderDate(updatedAt) }
        </span>
    </div>
);

export default ({ notes }) => (
    <div className="notes-list">
        {notes.map(n => <Note note={n} key={`note-${n._id}`}/> )}
    </div>
);


