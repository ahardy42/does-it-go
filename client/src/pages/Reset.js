import React from 'react';
import MyAppBar from '../components/MyAppBar';
import ResetContainer from '../containers/ResetContainer';

const Reset = () => {

    // height will be passed to the useStyles hook for each sub-component of a page...
    // it will be used to set the height of the root element of each sub-component

    return (
        <>
            <MyAppBar page='reset' height='10vh'/>
            <ResetContainer height='90vh'/>
        </>
    );
}

export default Reset;