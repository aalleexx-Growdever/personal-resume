import { Card, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export default function TextCard(props) {
  const classes = useStyles();
  const {
    title, period, role, where, description,
  } = props;

  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <h4 className={classes.subtitle}>Período:</h4>
      <Typography className={classes.text}>{period}</Typography>
      <h4 className={classes.subtitle}>Função:</h4>
      <Typography className={classes.text}>{role}</Typography>
      <h4 className={classes.subtitle}>Empresa:</h4>
      <Typography className={classes.text}>{where}</Typography>
      <h4 className={classes.subtitle}>Descrição:</h4>
      <Typography className={classes.text}>{description}</Typography>
    </Card>
  );
}
