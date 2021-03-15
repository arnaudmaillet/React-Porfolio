import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil.js';
import Profil from './pages/Profil.js';
import Projets from './pages/Projets.js';
import Formations from './pages/Formations.js';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/profil" component={Profil} />
      <Route exact path="/formations" component={Formations} />
      <Route exact path="/projets" component={Projets} />
    </Switch>
  );
}

export default App;
