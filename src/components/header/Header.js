import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to="/">fas0memas</Link>
            <Link to='/about' className='icon-about'>

            </Link>
        </header>
    )
}

export default Header