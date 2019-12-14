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

const ResetForm = ({ formState, handleChange, handleSubmit, ...props }) => {

    const classes = useStyles(props);

    return (
        <Container className={classes.root}>
            <form id='reset-form' className={classes.form}>
                <Paper className={classes.paper}>
                    <TextField 
                        name='SET_USERNAME'
                        value={formState.username}
                        label='Enter Username'
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.input}
                    />
                    <Button
                        id='SEND_RESET_KEY'
                        onClick={handleSubmit}
                        variant='contained'
                        className={classes.button}
                    >
                        Submit!
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}

export default ResetForm;