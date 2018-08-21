import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../images/warbler-logo.png';


class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to='/'>
                            <img alt='HOME' src={Logo} />
                        </Link>
                    </div>
                
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <Link to='/signup'>SignUp</Link>
                    </li>
                    <li>
                        <Link to='/signin'>Log In</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);