import React, { Component } from 'react'
import ListNotes from '../components/ListNotes.js';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        let notes = Object.values(props.notes)

        this.state = { notes };
    }

    render() {
        let { notes } = this.state;

        return (
            <div>
                <h1>QuickNote</h1>
                <ListNotes notes={this.state.notes}/>
            </div>
        )
    }
}

export default IndexPage;
