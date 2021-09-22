import React, { Component } from 'react';
import Body from './body';
import Header from './header';


class Layout extends React.Component {
    render() {
        return <div>
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
        </div>;
    }
}

export default Layout;