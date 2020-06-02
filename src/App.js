import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/global/header';
import { Home } from './components/global';
import { ReduxWay } from './components/redux';
import { ContextWay } from './components/context';

import './App.css';
import './components/global/global.css';

function App() {
  return (
    <div className="App">
      <div className="app-main">
          <Header />
          <main className="main">
          <Router>
              <>
                  <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/redux" component={ReduxWay} exact />
                  <Route path="/context-api" component={ContextWay} exact />
                  </Switch>
              </>
          </Router>
          </main>
      </div>
    </div>
  );
}

export default App;
