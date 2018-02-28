import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../../actions/auth';
import {getRegisterStatus} from '../../reducers/auth';
import {Link} from 'react-router-dom';

import s from './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            errorMessage: null
        }
    }

    registerUser = () => {
        const {username, password} = this.state;
        if (username && password) {
            this.setState({errorMessage: null});
            this.props.registerUser({username, password});
        } else {
            this.setState({errorMessage: 'Username and Password are mandatory'});
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => console.log(this.state));
    }

    render() {
        const {registerStatus} = this.props;
        const {errorMessage} = this.state;

        return (
            <div className={s.Register}>
                <input type="text" name={'username'} placeholder="Name" onChange={this.handleChange} />
                <input type="password" name={'password'} placeholder="Password" onChange={this.handleChange} />
                <button onClick={this.registerUser} disabled={registerStatus === 'LOADING' ? true : false}>Register New User</button>
                {errorMessage}
                {registerStatus === 'SUCCESS' ? <div>
                    <p>User has been succesfully registered</p>
                    <Link to="/"><button>Go to Login</button></Link>
                </div> : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const registerStatus = getRegisterStatus(state);

    return {
        registerStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        registerUser
      },
      dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);