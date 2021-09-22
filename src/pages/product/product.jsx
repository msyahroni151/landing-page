import React, { Component } from 'react';
import './product.css';

class Product extends React.Component {
    render() {
        return <div className='parent-box'>
            <div className='foto-produk'>
                <img src={process.env.PUBLIC_URL + '/img/macbook.jpg'} alt='product' />
            </div>
            <div className='deskripsi'>
                <p className='kategori'>PRODUK</p>
                <h1 className='title'>Mackbook Pro</h1>
                <p className='price'>IDR 20.000.000</p>
                <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus deserunt obcaecati at laboriosam veniam eum nulla nostrum, in quam unde.</p>
            </div>
        </div>;
    }
}

export default Product;