import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Grid2 as Grid } from '@mui/material';

import 'firebaseAuth';
import store from 'store';
import './index.css';
import Home from 'pages/Home';
import EndlessTimeline from 'pages/EndlessTimeline';
import Header from 'components/Header';

import Login from 'pages/Login';
import { useAuth } from 'hooks/useAuth';

const App: React.FC = () => {
  const user = useAuth();

  return (
    <Grid container direction={'column'} sx={{ height: '100%' }}>
      <Grid sx={{ '& .MuiPaper-root': { position: 'static' } }}>
        <Header />
      </Grid>
      <Grid sx={{ flexGrow: '1' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/et'
            element={user ? <EndlessTimeline /> : <Navigate to='/login' />}
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
