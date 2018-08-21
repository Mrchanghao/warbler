import React from 'react'
import {Link} from 'react-router-dom';

const Homepage = ({currentUser}) => {
    if(!currentUser.isAuthenticated) {
        return (
            <div className='home-hero'>
        <h1>what happen?</h1>
        <h4>new to warbler?</h4>
        <Link to='/signup' className='btn btn-primary'>Sign up</Link>
    </div>
        )
    }
    return (
        <div>
            <h1>you made it</h1>
        </div>
    )  
};

export default Homepage;