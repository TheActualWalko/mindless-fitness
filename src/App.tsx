import React from 'react';
import { Views, State } from './store';
import { connect } from 'react-redux';
import './App.css';
import Workout from './Workout';

const App = ({ view }: { view: State['view'] }) => (
  <div className="App">
    {view === Views.WORKOUT && <Workout />}
  </div>
);

export default connect((state: State) => ({ view: state.view }))(App);
