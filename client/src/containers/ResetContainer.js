import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { reset } from '../globalState/actions';
import ResetForm from '../components/ResetForm';

const ResetContainer = ({ reset, height }) => {

    // local state stuff
    const initialFormState = {
        username: ''
    }

    const resetReducer = (state, { type, payload }) => {
        switch (type) {
            case 'SET_USERNAME':
                return { username: payload };
            default:
                return state;
        }
    }

    const [formState, formDispatch] = useReducer(resetReducer, initialFormState);

    // handlers for form 
    const handleChange = event => {
        const { name, value } = event.target;

        formDispatch({type: name, payload: value});
    }

    const handleSubmit = event => {

        event.preventDefault();

        reset(formState);

    }

    return (
        <ResetForm 
            height={height}
            formState={formState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
    
}

export default ResetContainer;