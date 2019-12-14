import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Link
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const links = page => {
    switch (page) {
        case 'login':
            return <Link color='inherit' component={RouterLink} to='/signup'>Signup</Link>;
        case 'signup':
            return <Link color='inherit' component={RouterLink} to='/login'>Login</Link>;
        default: 
            return 
    }
}

const title = page => {
    switch (page) {
        case 'login':
            return 'Login Page';
        default:
            return 'Welcome!'
    }
}

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
        height: props => props.height
    },
    title: {
        flexGrow: 1
    },
    subTitle: {
        fontSize: '0.8em'
    }
}))

const MyAppBar = ({ page, ...props }) => {

    const classes = useStyles(props);

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Typography variant='h4' className={classes.title}>
                    Does It Go? | <span className={classes.subTitle}>{title(page)}</span>
                </Typography>
                {links(page)}
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;