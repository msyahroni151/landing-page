import React, { Component } from 'react';
import './container.css'
import Rtable from '../router'
import { Redirect, Route, Switch } from 'react-router-dom';

class Body extends React.Component {
    render() {
        return <div className='body'>
            <Switch>
                {
                    Rtable.map((page) => (
                        <Route path={page.path} exact={page.exact} component={page.component}></Route>
                    ))
                }
                <Redirect from='/' to='/home'></Redirect>
            </Switch>
        </div>;
    }
}

export default Body;