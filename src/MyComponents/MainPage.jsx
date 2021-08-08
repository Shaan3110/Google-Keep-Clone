import React,{useState} from 'react'
import Header from './Header';
// import TextArea from './MyComponents/TextArea';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
const MainPage = () => {
    const [array, setarray] = useState([])
    const addElement = (note) => {
        setarray((elements) => {
            return (
                [...elements,
                    note]
            )
        })
    }
    const del = (id) => {
        setarray((olddata) => {
            return (
                olddata.filter((values, indx) => {
                    return indx !== id;
                })
            )
        })
    }
    return (
        <>
            <Header />
            <CreateNote addElement={addElement} />
            <div className='notes'>
                {
                    array.map((ele, index) => {
                        return (
                            <Note key={index} ele={ele} id={index} del={del} />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default MainPage
