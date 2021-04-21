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
  const [invalidName, setInvalidName] = useState(false);
  const [invalidText, setInvalidText] = useState(false);
  const [saved, setSaved] = useState(false);

  function timer() {
    const time = setTimeout(() => setSaved(false), 4000);
    return () => clearTimeout(time);
  }

  async function onSave(event) {
    event.preventDefault();
    setInvalidName(false);
    setInvalidText(false);
    setSaved(false);

    if (!name) {
      setInvalidName(true);
    } else if (!text) {
      setInvalidText(true);
    } else {
      const feedback = { name, text };
      await Api.saveFeedback(feedback);
      setSaved(true);
      setName('');
      setText('');
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
            <TextField color="primary" label="Nome" variant="standard" required className={classes.formInput} value={name} onChange={(e) => setName(e.target.value)} error={invalidName} />
            <TextField color="primary" label="Feedback" variant="filled" multiline rows={6} required className={classes.formInput} value={text} onChange={(e) => setText(e.target.value)} error={invalidText} />
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
