import { Card, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export default function TextCard(props) {
  const classes = useStyles();
  const {
    title, date, where, description,
  } = props;

  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <h4 className={classes.subtitle}>Conclusão prevista em:</h4>
      <Typography className={classes.text}>{date}</Typography>
      <h4 className={classes.subtitle}>Empresa:</h4>
      <Typography className={classes.text}>{where}</Typography>
      <h4 className={classes.subtitle}>Descrição:</h4>
      <Typography className={classes.text}>{description}</Typography>
    </Card>
  );
}
