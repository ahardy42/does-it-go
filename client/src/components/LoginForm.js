import React from 'react';
import {
    Button,
    Container,
    TextField,
    Paper,
    Link
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
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
        marginTop: '2em',
        marginBottom: '2em'
    }
}))

const LoginForm = ({ formState, handleChange, handleSubmit, ...props }) => {
    
    const classes = useStyles(props);

    return (
        <Container className={classes.root}>
            <form id='login-form' className={classes.form}>
                <Paper className={classes.paper}>
                    <TextField
                        name='SET_USERNAME'
                        value={formState.username}
                        label='Username'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <TextField
                        name='SET_PASSWORD'
                        value={formState.password}
                        label='Password'
                        type='password'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <Button
                        id='LOGIN_USER'
                        onClick={handleSubmit}
                        variant='contained'
                        className={classes.button}
                    >
                        Submit!
                    </Button>
                    <Link color='inherit' component={RouterLink} to='/reset'>Forgot your username/password?</Link>
                </Paper>
            </form>
        </Container>
    );
}

// injecting some dispatch funcs into this form
export default LoginForm;