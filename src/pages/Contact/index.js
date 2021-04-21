import {
  Box, Button, Grid, TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import React, { useState } from 'react';
import Api from '../../services/api';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [invalidData, setInvalidData] = useState(false);
  const [saved, setSaved] = useState(false);

  async function onSave(event) {
    event.preventDefault();
    setInvalidData(false);
    setSaved(false);

    if (!name || !text) {
      setInvalidData(true);
    } else {
      const contact = { name, text };
      await Api.saveContact(contact);
      setSaved(true);
    }

    setName('');
    setText('');
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
            <TextField color="primary" label="Seu nome" variant="standard" required className={classes.formInput} value={name} onChange={(e) => setName(e.target.value)} error={invalidData} />
            <TextField color="primary" label="Seu feedback" variant="filled" multiline rows={6} required className={classes.formInput} value={text} onChange={(e) => setText(e.target.value)} error={invalidData} />
          </form>
        </Grid>
        <Button variant="text" className={classes.btn} onClick={onSave}>
          Enviar
        </Button>
        {
          saved
            ? (
              <Box p={2} mt={2} bgcolor="green" color="primary.contrastText">
                Enviado com sucesso.
              </Box>
            )
            : ''
        }
      </Grid>
    </Grid>
  );
}
