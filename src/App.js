import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Router/Home';
import About from './Router/About';
import Navigation from './Component/Navigation';
import Detail from './Router/Detail';
import './App.css';
const App = () => {
  return(
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home} ></Route>
      <Route path="/about" exact={true} component={About} ></Route>
      <Route path="/movie/:id" exact={true} component={Detail} ></Route>
    </HashRouter>
  )
}

export default App;