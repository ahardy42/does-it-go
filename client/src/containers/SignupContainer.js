import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { signup } from '../globalState/actions';
import SignupForm from '../components/SignupForm';

const SignupContainer = ({ signup, height }) => {

    // local state stuff
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    }

    const signupReducer = (state, { type, payload }) => {
        switch (type) {
            case 'SET_FIRSTNAME':
                return { ...state, firstName: payload };
            case 'SET_LASTNAME':
                return { ...state, lastName: payload };
            case 'SET_EMAIL':
                return { ...state, email: payload };
            case 'SET_USERNAME':
                return { ...state, username: payload };
            case 'SET_PASSWORD':
                return { ...state, password: payload };
            case 'SET_REPEAT_PASSWORD':
                return { ...state, repeatPassword: payload };
            case 'RESET_STATE':
                return initialFormState;
            default:
                return state;
        }
    }

    const [formState, formDispatch] = useReducer(signupReducer, initialFormState);

    // handlers for the form
    const handleChange = event => {
        const { name, value } = event.target;

        formDispatch({type: name, payload: value});

    }

    const handleSubmit = event => {

        event.preventDefault();

        signup(formState);

    }

    return (
        <SignupForm 
            height={height} 
            formState={formState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

const mapDispatchToProps = dispatch => ({
    signup: userInfo => dispatch(signup(userInfo))
});

export default connect(null, mapDispatchToProps)(SignupContainer);