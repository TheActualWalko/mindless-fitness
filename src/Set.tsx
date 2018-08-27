import React from 'react';
import { connect } from 'react-redux';
import { State, Set as SetType } from './store';

interface Props {
  id: string;
}

const Set = ({ exerciseID, equipmentID, weightStack, reps }: SetType) => (
  <div>

  </div>
);

export default connect((state: State, ownProps: Props) => {
  return state.sets[ownProps.id];
})(Set);
