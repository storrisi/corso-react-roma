import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {loginUser} from '../../actions/auth';
import {getLoginStatus} from '../../reducers/auth';
import s from './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            errorMessage: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginStatus === 'ERROR') {
            this.setState({errorMessage: 'User not found. Please try Again.'});
        }
    }

    doLogin = () => {
        const {username, password} = this.state;
        if (username && password) {
            this.setState({errorMessage: null});
            this.props.loginUser({username, password});
        } else {
            this.setState({errorMessage: 'Username and Password are mandatory'});
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => console.log(this.state));
    }


    render() {
        const {loginStatus} = this.props;
        const {errorMessage} = this.state;
        return (
            <div className={s.Login}>
                <h1>Login page</h1>
                <input type="text" name={'username'} placeholder="Name" onChange={this.handleChange} />
                <input type="password" name={'password'} placeholder="Password" onChange={this.handleChange} />
                <button onClick={this.doLogin} disabled={loginStatus === 'LOADING' ? true : false}>Login</button>
                <Link to="/register"><button>Don't have an account? Click Here to Register</button></Link>
                {errorMessage}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const loginStatus = getLoginStatus(state);

    return {
        loginStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        loginUser
      },
      dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);