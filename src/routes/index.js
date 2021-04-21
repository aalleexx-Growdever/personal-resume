import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Carrer from '../pages/Carrer';
import Skills from '../pages/Skills';
import Academic from '../pages/Academic';
import History from '../pages/History';
import Future from '../pages/Future';
import Feedback from '../pages/Feedback';
import Contact from '../pages/Contact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrer" exact component={Carrer} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/history" exact component={History} />
        <Route path="/academic" exact component={Academic} />
        <Route path="/future" exact component={Future} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
