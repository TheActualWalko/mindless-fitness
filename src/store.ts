import { omit } from 'lodash';
import { createStore } from 'redux';
type WeightStack = number[];

interface AddSetAction {
  type: Actions.ADD_SET;
  payload: {
    id: number;
    set: Set;
  };
}

interface RemoveSetAction {
  type: Actions.REMOVE_SET;
  payload: number;
}

export interface Set {
  exerciseID: string;
  equipmentID: string;
  weightStack: WeightStack;
  reps: number;
}

export interface Workout {
  setIDs: string[];
  date: Date;
}

export interface Exercise {
  name: string;
  equipmentIDs: string[];
}

export interface TotalCalculation {
  name: string;
  multiplier?: number;
  bias?: number;
}

export interface Equipment {
  name: string;
  totalCalculation: TotalCalculation;
}

export enum Actions {
  ADD_SET,
  REMOVE_SET,
}

export enum Views {
  WORKOUT,
}

export interface State {
  sets: {
    [key: string]: Set;
  };
  workouts: {
    [key: string]: Workout;
  };
  workoutID?: string;
  view: Views;
}

type Action = AddSetAction | RemoveSetAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case Actions.ADD_SET: {
      return {
        ...state,
        sets: {
          ...state.sets,
          [action.payload.id]: action.payload.set,
        },
      };
    }
    case Actions.REMOVE_SET: {
      return {
        ...state,
        sets: omit(state.sets, String(action.payload)),
      };
    }
    default: {
      return state;
    }
  }
}

const defaultState: State = {
  workouts: {},
  sets: {},
  view: Views.WORKOUT,
};

export default createStore(reducer, defaultState);
