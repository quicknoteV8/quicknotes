import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <nav>
        <Link to="/"><h1>Quick Notes</h1></Link>
        <span>
            <Link to = "/new">New Note</Link>
        </span>
    </nav>
)
