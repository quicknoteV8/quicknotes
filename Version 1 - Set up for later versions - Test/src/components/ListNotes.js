import React, { Component } from 'react';

export default class ListNotes extends React.Component {
    renderNotes() {
        const notes = Object.values(this.props.notes)
        return (
            notes.map((n) => 
                <div>
                    <h3>{n.title}</h3>
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

