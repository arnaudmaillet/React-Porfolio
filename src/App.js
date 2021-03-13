import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil.js';
import Profil from './pages/Profil.js';
import Projets from './pages/Projets.js';
import Stages from './pages/Stages.js';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/profil" component={Profil} />
      <Route exact path="/projets" component={Projets} />
      <Route exact path="/stages" component={Stages} />
    </Switch>
  );
}

export default App;
