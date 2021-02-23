import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import EditPost from './components/EditPost'
import NewPost from './components/NewPost'


function App() {
  return (
    <div className="App">
    <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/editPost' component={EditPost} />
              <Route exact path='/newPost' component={NewPost} />

            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
