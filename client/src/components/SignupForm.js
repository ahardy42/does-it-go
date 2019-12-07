import React from 'react';
import {
    Button,
    Container,
    TextField,
    Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    root: {
        height: props => props.height
    },
    paper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        height: '100%'
    },
    input: {
        width: '80%',
        marginTop: '1em'
    },
    button: {
        marginTop: '2em'
    }
}));

const SignupForm = ({ formState, handleChange, handleSubmit, validation, ...props }) => {

    const classes = useStyles(props);

    let { firstName, lastName, email, username, password, repeatPassword } = formState;

    return (
        <Container className={classes.root}>
            <form id='signup-form' className={classes.form}>
                <Paper className={classes.paper}>
                    <TextField 
                        name='SET_FIRSTNAME'
                        value={firstName}
                        label='First Name'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <TextField 
                        name='SET_LASTNAME'
                        value={lastName}
                        label='Last Name'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <TextField 
                        name='SET_EMAIL'
                        value={email}
                        label='Email'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <TextField 
                        name='SET_USERNAME'
                        value={username}
                        label='Username'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <TextField 
                        name='SET_PASSWORD'
                        value={password}
                        label='Password'
                        variant='outlined'
                        type='password'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <TextField 
                        name='SET_REPEAT_PASSWORD'
                        value={repeatPassword}
                        label='Re-type Password'
                        variant='outlined'
                        type='password'
                        onChange={handleChange}
                        className={classes.input}
                        error={repeatPassword.length && password !== repeatPassword}
                    />
                    <Button
                        id='SIGNUP_USER'
                        onClick={handleSubmit}
                        variant='contained'
                        className={classes.button}
                    >
                        Sign Up!
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}

export default SignupForm;
