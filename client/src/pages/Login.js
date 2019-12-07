import React from 'react';
import MyAppBar from '../components/MyAppBar';
import LoginContainer from '../containers/LoginContainer';

// materialUI
import {
    Grid
} from '@material-ui/core'


const Login = () => {

    // height will be passed to the useStyles hook for each sub-component of a page...
    // it will be used to set the height of the root element of each sub-component

    return (
        <>
            <MyAppBar page='login' height='10vh'/>
            <LoginContainer height='90vh'/>
        </>
    );
}

export default Login;