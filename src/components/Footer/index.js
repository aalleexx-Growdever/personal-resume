import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  Instagram, Feedback, Contacts, LinkedIn,
} from '@material-ui/icons';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" className={classes.grid}>
      <Link to="/feedback" variant="button" className={classes.link}>
        <Feedback />
        Feedback
      </Link>
      <Link to="/contact" variant="button" className={classes.link}>
        <Contacts />
        Contatar
      </Link>
      <Link to={{ pathname: 'https://www.instagram.com/bkmassoterapia/' }} target="_blank" className={classes.link}>
        <Instagram />
        Becker&Kersten
      </Link>
      <Link to={{ pathname: 'https://www.linkedin.com/in/alexsandro-becker-b627a3186/' }} target="_blank" className={classes.link}>
        <LinkedIn />
        Linkedin
      </Link>
    </Grid>
  );
}
