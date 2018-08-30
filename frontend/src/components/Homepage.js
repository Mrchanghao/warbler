import React from 'react'
import {Link} from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

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
            <MessageTimeline 
            profileImageUrl={currentUser.profileImageUrl} 
            username={currentUser.username}  />
        </div>
    )  
};

export default Homepage;