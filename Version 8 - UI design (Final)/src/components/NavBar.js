import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/NavBar.css'


export default () => (
    <nav className = "navbar">
        <Link to="/"><h1>📖 Quick Notes</h1></Link>
        <span className = "navbar-buttons">
            <Link className = "btn" to = "/new">New Note</Link>
            <a className = 'btn' href="https://docs.google.com/document/d/1dL7Uskzj5-_A59lksadREb78ay-bTC-QQ1u6uJo66PA/edit?usp=sharing">Help</a>
        </span>
    </nav>
)

