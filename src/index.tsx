import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Grid2 as Grid } from '@mui/material';

import Home from 'pages/Home'
import EndlessTimeline from 'pages/EndlessTimeline';

import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Grid container direction={'column'} sx={{ height: '100%' }}>
        <Grid>Header</Grid>
        <Grid sx={{ flexGrow: '1' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/et' element={<EndlessTimeline />} />
          </Routes>
        </Grid>
        <Grid>Footer</Grid>
      </Grid>
    </BrowserRouter>
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

initializeApp(firebaseConfig);
