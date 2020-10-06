import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: '',
            email: ''
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = (e) => {
        e.preventDefault();
        let newUser = {
            username: this.state.username,
            age: this.state.age,
            email: this.state.email
        }
        //place user on redux state
        this.props.getUser(newUser);
        //navigate the user to the dashboard page
        this.props.history.push('/dashboard');
    }

    render(){
        const {username, age, email} = this.state;

        return (
            <section className='login'>
                <form className='login-form'>
                    <input name='username' value={username} placeholder='Username' onChange={e => this.handleInput(e)}/>
                    <input name='age' value={age} placeholder='Age' onChange={e => this.handleInput(e)}/>
                    <input name='email' value={email} placeholder='Email' onChange={e => this.handleInput(e)}/>
                    <button> onClick={this.login}</button>
                </form>
            </section>
        )
    }
}

export default connect(null, {getUser})(Login);