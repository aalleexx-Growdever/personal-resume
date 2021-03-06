import {
  Box, Button, Grid, TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [saved, setSaved] = useState(false);

  function timer() {
    const time = setTimeout(() => setSaved(false), 4000);
    return () => clearTimeout(time);
  }

  async function onSave(event) {
    event.preventDefault();
    setInvalidName(false);
    setInvalidNumber(false);
    setInvalidEmail(false);
    setSaved(false);

    if (!name) {
      setInvalidName(true);
    } else if (!number) {
      setInvalidNumber(true);
    } else if (!email) {
      setInvalidEmail(true);
    } else {
      const contact = { name, number, email };
      await Api.saveContact(contact);
      setSaved(true);
      setName('');
      setNumber('');
      setEmail('');
      timer();
    }
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.bg}>
      <Grid item container sm={4} className={classes.main}>
        <Grid item container direction="row" alignItems="flex-start">
          <Link to="/" className={classes.btnBack}>
            <ArrowBack fontSize="large" />
          </Link>
        </Grid>
        <Grid container item direction="column" justify="center" alignItems="center">
          <form className={classes.form}>
            <TextField color="primary" label="Nome" variant="filled" required className={classes.formInput} value={name} onChange={(e) => setName(e.target.value)} error={invalidName} />
            <TextField color="primary" label="Telefone" variant="filled" required className={classes.formInput} value={number} onChange={(e) => setNumber(e.target.value)} error={invalidNumber} />
            <TextField color="primary" label="Email" variant="filled" required className={classes.formInput} value={email} onChange={(e) => setEmail(e.target.value)} error={invalidEmail} />
          </form>
        </Grid>
        <Button variant="text" className={classes.btn} onClick={onSave}>
          Enviar
        </Button>
        {
          saved
            ? (
              <Box p={2} mt={2} bgcolor="lightBlue" className={classes.box}>
                Enviado com sucesso. Obrigado.
              </Box>
            )
            : ''
        }
      </Grid>
    </Grid>
  );
}
