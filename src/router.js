import React, { Component } from 'react';

//Home
const HomePage = React.lazy(() => import('./pages/home/home'))
//About
const About = React.lazy(() => import('./pages/about/about'))
//Login
const Login = React.lazy(() => import('./pages/login/login'))
//Contac Us
const Contact = React.lazy(() => import('./pages/contac/contac'))
//Proudct
const Proudct = React.lazy(() => import('./pages/product/product'))
//Porto
const Portofolio = React.lazy(() => import('./pages/porto/porto'))

const Routes = [
    {
        path: '/home',
        exact: true,
        component: HomePage,
    },
    {
        path: '/about',
        exact: true,
        component: About,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/contac',
        exact: true,
        component: Contact,
    },
    {
        path: '/product',
        exact: true,
        component: Proudct,
    },
    {
        path: '/porto',
        exact: true,
        component: Portofolio,
    }
]

export default Routes