import React from 'react'
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';
 
export default function App() {
    return (
        <Router>
            <Helmet
             titleTemplate="%s - Portfolio"
             defaultTitle="Portfolio"
            >
                <meta name="description" content="A Personal Side Project"/>

            </Helmet>
            <Routes />
        </Router>
    )
}
