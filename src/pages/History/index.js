import { Grid } from '@material-ui/core';
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HistoryCard from '../../components/HistoryCard';

import { history } from '../../details/texts/index';

import useStyles from './styles';

export default function Carrer() {
  const classes = useStyles();
  const cards = [];

  history.forEach((item) => {
    cards.push(
      <Grid item sm={4}>
        <HistoryCard {...item} />
      </Grid>,
    );
  });

  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row" justify="space-around" className={classes.main}>
        {cards}
      </Grid>
      <Footer />
    </Grid>
  );
}
