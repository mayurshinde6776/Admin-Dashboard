import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Setting from './pages/Setting';
import About from './pages/About';


function App() {
  return (
 <>
   <BrowserRouter>
   <Switch>
<Route path='/' exact  component={Home} ></Route>
<Route path='settings'  component={Setting} ></Route>
<Route path='/about' component={About} ></Route>
   </Switch>
   </BrowserRouter>
 </>
  );
}

export default App;
