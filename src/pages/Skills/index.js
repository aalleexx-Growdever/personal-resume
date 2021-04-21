import { Grid } from '@material-ui/core';
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextListCard from '../../components/TextListCard';
import TextCard from '../../components/TextCard';

import { primarySkills, secondarySkills, futureSkills } from '../../details/texts/index';

import useStyles from './styles';

export default function Carrer() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row" justify="space-around" className={classes.main}>
        <Grid item sm={3}>
          <TextListCard title="Principais" text={primarySkills} />
        </Grid>
        <Grid item sm={3}>
          <TextListCard title="Secundárias" text={secondarySkills} />
        </Grid>
        <Grid item sm={3}>
          <TextCard title="Futuras" text={futureSkills} />
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
