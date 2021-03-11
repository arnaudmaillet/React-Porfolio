import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Fiche from './pages/Fiche';
import Projets from './pages/Projets';
import Stages from './pages/Stages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/fiche" component={Fiche} />
      <Route exact path="/projets" component={Projets} />
      <Route exact path="/stages" component={Stages} />
    </Switch>
  );
}

export default App;
