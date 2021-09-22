import React, { Component } from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        return <div className='jumbotron'>
            <div className='image'>
                <img src={process.env.PUBLIC_URL + '/img/Gambar baju.png'} alt='baju' />
            </div>
            <div className='deskripsi'>
                <h1 className='title1'>MORETAG MX WEAR</h1>
                <h1 className='title2'>RIDE TIL I DIE</h1>
                <p className='info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed harum repudiandae aut, maxime amet nostrum reiciendis ex laboriosam sapiente. Quia earum aliquam fuga quae.</p>
                <button className='btn'>Buy Now</button>
            </div>
        </div>;
    }
}

export default Home;