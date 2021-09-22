import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './container.css';


class Header extends React.Component {
    render() {
        return <div className='header'>
            <div className='header-wrapper'>
                <img src={process.env.PUBLIC_URL + '/img/Logo.png'} width='100px' alt='logo' />
                <div className='right-header'>
                    <Link to='/home'><div><b>Home</b></div></Link>
                    <Link to='/about'><div>About</div></Link>
                    <Link to='/product'><div>Product</div></Link>
                    <Link to='/contac'><div>Contact Us</div></Link>
                    <Link to='/porto'><div>Porto</div></Link>
                    <Link to='/login'><div>Login</div></Link>
                </div>
            </div>
        </div>;
    }
}

export default Header;