import React, { Children } from 'react';

import { Grid, Container } from '@material-ui/core';
import Header from '../../components/Header';

export default function Layout() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item={12}>
        <Container>
          {Children}
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
