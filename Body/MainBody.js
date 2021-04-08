import React from 'react';
import Hsc from '../Body/HscPage/Hsc';
import Medx from './MedxPage/Medx';
import About from './AboutPage/About';
import Contact from './ContactPage/Contact';
import Home from '../Body/firstPage/Home';
import { Route, Redirect } from 'react-router-dom';
import './body.css'
const MainBody = () => {
    return (
        <div className='body'>
            <Route path="/" exact component={Home} />
            <Route path="/hsc" exact component={Hsc} />
            <Route path="/medx" exact component={Medx} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
        </div>
    )
}

export default MainBody;
