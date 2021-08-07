import React from 'react'
import '../stylesheets/Footer.css'

function Footer() {
    let d=new Date().getFullYear();
    return (
        <div className='footer'>
            <p>Copyrighted under © {d}</p>
        </div>
    )
}

export default Footer
