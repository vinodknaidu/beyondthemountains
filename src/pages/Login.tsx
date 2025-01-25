import React from 'react';
import { Button, TextField } from '@mui/material';
import { createUseStyles } from 'react-jss';

const Login: React.FC = () => {
  const classes = useStyles();

  function handleOnSubmit(event: React.SyntheticEvent) {
    const target = event.target as typeof event.target & {
      phno: { value: string };
      pswd: { value: string };
    };
    alert(target.phno + ' ' + target.pswd);
  }

  return (
    <form onSubmit={handleOnSubmit} className={classes.form}>
      <TextField label='Phone number' required name='phno' />
      <TextField
        label='Authentication code'
        required
        type='password'
        name='pswd'
      />
      <Button type='submit' variant='contained'>Login</Button>
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
    height: '100%',
    '& > *': {
      margin: '10px',
    },
  },
});
