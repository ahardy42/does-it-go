import React from 'react';
import { useSelector } from 'react-redux';
import Authenticated from './routes/Authenticated';
import UnAuthenticated from './routes/UnAuthenticated';
import './App.sass';

function App() {

  const { isLoggedIn, username } = useSelector(state => state.authReducer);

  return (
    isLoggedIn ? <Authenticated user={username}/> : <UnAuthenticated />
  );
}

export default App;
