import { Card, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export default function TextCard(props) {
  const classes = useStyles();
  const { title, text } = props;

  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <Typography className={classes.text}>{text}</Typography>
    </Card>
  );
}
