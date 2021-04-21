import { Card } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export default function TextCard(props) {
  const classes = useStyles();
  const { title, text } = props;
  const texts = [];

  text.forEach((item) => texts.push(
    <li className={classes.text}>{item}</li>,
  ));

  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <ul>
        {texts}
      </ul>
    </Card>
  );
}
