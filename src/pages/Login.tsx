import React, { useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Button, TextField } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useAuth } from 'hooks/useAuth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const user = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/et');
    }
  }, [user]);

  async function handleOnSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    await signInWithEmailAndPassword(
      getAuth(),
      target.email.value,
      target.password.value
    );
  }

  return (
    <form onSubmit={handleOnSubmit} className={classes.form}>
      <TextField label='email' required name='email' />
      <TextField
        label='Authentication code'
        required
        type='password'
        name='password'
      />
      <Button type='submit' variant='contained'>
        Login
      </Button>
    </form>
  );
};

export default Login;

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // flexGrow: 1,
    '& > *': {
      margin: '10px',
    },
  },
});
