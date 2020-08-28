import React from 'react';
import './App.css';
import {Footer, Header} from './components'
import {Home} from './pages'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
<Router>
      <Header/>
      <Switch>

         <Route path='/search' >
          <Search />
         </Route>
         <Route path='/'>
          <Home />
         </Route> 
     
      </Switch>
    

     <Footer />
</Router>
    </div>
  );
}

export default App;
