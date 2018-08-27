import React from 'react';
import { connect } from 'react-redux';
import { State, Workout as WorkoutType } from './store';
import Set from './Set';

const Workout = ({ setIDs, date }: WorkoutType) => (
  <div>
    {setIDs.map((setID) => <Set id={setID} />)}
  </div>
);

export default connect((state: State) => {
  if (!state.workoutID) {
    throw new Error('no workout selected!');
  }
  return state.workouts[state.workoutID];
})(Workout);
