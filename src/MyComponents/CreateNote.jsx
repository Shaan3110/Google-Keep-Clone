import React,{useState} from 'react'
import '../stylesheets/CreateNote.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function CreateNote(props) {
    const [Expand, setExpand] = useState(false);
    const [note, setnote] = useState({
        title:"",
        content:"",
    });
    const add=()=>{
        props.addElement(note);
        setnote({
            title:"",
            content:"",
        })
    }
    const changed=(event)=>{
        const {name,value}=event.target;
        setnote((ele)=>{
           return(
            {
            ...ele,
            [name]:value, 
            }
           );
        });
    }
    const expand=()=>{
        setExpand(true);
    }
    const close=()=>{
        setExpand(false);
    }
    return (
        <div className="createnote"  onDoubleClick={close}>
            <form>
                {Expand?
                <>
                <input type="text" name='title' placeholder='Title' onChange={changed} value={note.title}/>
                <br />
                <hr />
                </>
                :null}

                <textarea name="content" cols="30" rows="10" placeholder="Write your note" onChange={changed} value={note.content} onClick={expand}></textarea>
                {Expand?
                <>
                <div className="submitting" >
                   <AddCircleOutlineIcon className="plus" onClick={add}/>
                   </div>
                </>:null}
                
            </form>
        </div>
    )
}

export default CreateNote
