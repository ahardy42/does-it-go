import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { login } from '../globalState/actions';
import LoginForm from '../components/LoginForm';

const LoginContainer = ({login, authReducer, height}) => {

    // local state stuff
    const initialFormState = {
        username: '',
        password: ''
    }

    const loginReducer = (state, { type, payload }) => {
        switch (type) {
            case 'SET_USERNAME':
                return { ...state, username: payload };
            case 'SET_PASSWORD':
                return { ...state, password: payload };
            default:
                return state;
        }
    }

    const [formState, formDispatch] = useReducer(loginReducer, initialFormState);

    // handleChange functions
    const handleChange = event => {

        const { name, value } = event.target; // name => type for dispatch

        formDispatch({ type: name, payload: value });

    }

    // handleSubmit function
    const handleSubmit = event => {

        event.preventDefault();

        login(formState);

    }

    return (
        <LoginForm height={height} formState={formState} handleSubmit={handleSubmit} handleChange={handleChange} />
    );
}

const mapStateToProps = ({authReducer}) => ({
    authReducer
});

const mapDispatchToProps = dispatch => ({
    login: userInfo => dispatch(login(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);