import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import photo from '../../details/images/avatar.jpg';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" className={classes.grid}>
      <Link to="/" variant="button" className={classes.link}>Sobre</Link>
      <Link to="/carrer" variant="button" className={classes.link}>Carreira</Link>
      <Link to="/skills" variant="button" className={classes.link}>Competências</Link>
      <Avatar className={classes.avatar} alt="Alex Becker" src={photo} />
      <Link to="/history" variant="button" className={classes.link}>Histórico</Link>
      <Link to="/academic" variant="button" className={classes.link}>Formação</Link>
      <Link to="/future" variant="button" className={classes.link}>Futuro</Link>
    </Grid>
  );
}
