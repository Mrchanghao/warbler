import React from 'react'
import DefaulProfileImg from '../images/default-profile-image.jpg';

const UserAside = ({profileImageUrl, username}) => {
    return (
        <aside className='col-sm-2'>
            <div className='panel panel-default'>
                <div className='panel-body'>
                    <img 
                    className='img-thumbnail'
                    width='200'
                    height='200'
                    src={profileImageUrl || DefaulProfileImg} alt={username} />
                </div>
            </div>
        </aside>
    )
}
export default UserAside;