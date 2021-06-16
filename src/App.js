import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Blog from './Components/Blog';




function App() {
  return (
   <Router>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/gallery">
        <Gallery/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/blog">
        <Blog/>
      </Route>
      </Switch>
    
   </Router>
  );
}

export default App;
