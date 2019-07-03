import React from 'react';
import { Link } from 'react-router-dom';

class NewNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            note: {
                title: '',
                body: '',
            },
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
            <div>
                <h1>New Note</h1>
                <form onSubmit={(e) => { e.preventDefault(); this.handleSave(); }}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={note.title} onChange={(e) => this.updateValue(e)} />
                    </div>
                    <div>
                        <textarea name="body" value={note.body} onChange={(e) => this.updateValue(e)} />
                    </div>
                    <div>
                        <input type="submit" value="Save"/>
                        <Link to={`/`}>Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewNotePage;
