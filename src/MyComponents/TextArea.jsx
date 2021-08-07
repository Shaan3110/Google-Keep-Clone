import React from 'react'
import CreateNote from './CreateNote'
import '../stylesheets/TextArea.css'

function TextArea() {
    return (
        <div className='textarea'>
            <textarea name="" id="" cols="30" rows="10" placeholder="Add a note" ></textarea>
        </div>
    )
}

export default TextArea
