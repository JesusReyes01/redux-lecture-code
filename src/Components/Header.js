import React from 'react';
import {connect} from 'react-redux';


const Header = props => (
    <header className='main-header'>
        <h1>Pokemon Trainer</h1>
        <h1>{props.userReducer.user.username}</h1>
    </header>
)

const mapStateToProps = reduxState => {
    return{
        userReducer: reduxState.userReducer
    }
}

export default connect(mapStateToProps)(Header);