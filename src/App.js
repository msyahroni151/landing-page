import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

const loading = <div></div>

const Loginpage = React.lazy(() => import('./pages/login/login'))
const Publiclayout = React.lazy(() => import('./containers/layout'))


class App extends React.Component {
  render() {
    return <BrowserRouter>
      <Suspense fallback={loading}><Switch>
        <Route path='/login' exact component={Loginpage} />
        <Route path='/' component={Publiclayout} />

      </Switch>
      </Suspense>
    </BrowserRouter>;
  }
}

export default App;