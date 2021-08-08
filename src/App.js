import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom'
import MainPage from './MyComponents/MainPage';

function App() 
{
  return (
    <>
      <Switch>
        <Route exact path='/Google-Keep-Clone' component={MainPage}/>
      </Switch>
      
      {/* <TextArea onClick={expand}/> */}
    </>
  );
}

export default App;
