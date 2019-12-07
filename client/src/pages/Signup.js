import React from 'react';
import MyAppBar from '../components/MyAppBar';
import SignupContainer from '../containers/SignupContainer';

const Signup = () => {

    return (
        <>
            <MyAppBar page='signup' height='10vh'/>
            <SignupContainer height='90vh' />
        </>
    );
}

export default Signup;