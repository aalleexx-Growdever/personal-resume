import { Grid } from '@material-ui/core';
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextCard from '../../components/TextCard';

import { thougts, help } from '../../details/texts/index';

import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row" justify="space-between" className={classes.main}>
        <Grid item sm={6}>
          <TextCard title="Pensamento" text={thougts} />
        </Grid>
        <Grid item sm={5}>
          <TextCard title="Feedback" text={help} />
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
