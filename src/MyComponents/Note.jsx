import React from 'react'
import '../stylesheets/Note.css'
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const d=()=>{
        props.del(props.id)
    }
    return (
        <div className='note'>
            <h1>{props.ele.title}</h1>
            <p>{props.ele.content}</p>
            <div className="deleting"><DeleteIcon className="delete" onClick={d}/></div>
        </div>
    )
}

export default Note
