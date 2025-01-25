import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Grid2 as Grid } from '@mui/material';

import store, { useSelector } from 'store';
import './index.css';
import Home from 'pages/Home';
import EndlessTimeline from 'pages/EndlessTimeline';
import Header from 'components/Header';

import { initializeApp } from 'firebase/app';
import Login from 'pages/Login';

const theme: Theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#1f1f1f',
  //     dark: '#0f1114',
  //   },
  // },
});

const App: React.FC = () => {
  const isAuthenticated: boolean = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Grid container direction={'column'} sx={{ height: '100%' }}>
          <Grid sx={{ '& .MuiPaper-root': { position: 'static' } }}>
            <Header />
          </Grid>
          <Grid sx={{ flexGrow: '1' }}>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route
                path='/et'
                element={
                  isAuthenticated ? (
                    <EndlessTimeline />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
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
