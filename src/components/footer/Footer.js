import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-wrapper">
                <a target='_blank' rel="noreferrer" href="https://github.com/Aventusa">Aventusa</a>  &#169; {(new Date).getFullYear()}
            </div>
        </footer>
    )
}

export default Footer