import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/form.css'

class NewNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            note: {
                title: '',
                body: '',
            },
            saving: false
        }
    }

    async handleSave() {

        const res = await this.props.onSave({ ...this.state.note });

        this.props.history.replace(`/notes/${ res.id }`)
    }

    updateValue(e) {
        let { note } = this.state;

        this.setState({ note: { ...note, [e.target.name]: e.target.value }});
    }

    render() {
        const { note } = this.state;

        return (
            <div className="note-form">
                <h1>New Note</h1>
                <form onSubmit={(e) => { e.preventDefault(); this.handleSave(); }}>
                    <div className="note-form-field">
                        <label>Title</label>
                        <input type="text" name="title" value={note.title} onChange={(e) => this.updateValue(e)} />
                    </div>
                    <div className="note-form-field note-form-field-text">
                        <textarea name="body" value={note.body} onChange={(e) => this.updateValue(e)} />
                    </div>
                    <div className="note-form-buttons">
                        <input type="submit" value="Save"/>
                        <Link to={`/`}>Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewNotePage;
