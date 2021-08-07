import './App.css';
import Header from './MyComponents/Header';
// import TextArea from './MyComponents/TextArea';
import CreateNote from './MyComponents/CreateNote';
import Note from './MyComponents/Note';
import Footer from './MyComponents/Footer';
import React,{useState} from 'react';

function App() 
{
  const [array, setarray] = useState([])
  const addElement=(note)=>{
    setarray((elements)=>{
      return(
        [...elements,
        note]
      )
    })
  }
  const del=(id)=>{
    alert("deleting!");
    setarray((olddata)=>{
      return(
      olddata.filter((values,indx)=>{
            return indx!==id;
        })
      )
      })
    // console.log(array);
  }
  // console.log(Expand);
  return (
    <>
      <Header/>
      {/* <TextArea onClick={expand}/> */}
      <CreateNote addElement={addElement}/>
      <div className='notes'>
      {
        array.map((ele,index)=>{
          return(
            <Note key={index} ele={ele} id={index} del={del}/>
          )
        })
      }
      </div>
      <Footer/>
    </>
  );
}

export default App;
