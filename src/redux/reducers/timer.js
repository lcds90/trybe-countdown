import {
  COUNTDOWN_HISTORY_ADD, COUNTDOWN_HISTORY_REMOVE, COUNTDOWN_TOGGLE,
} from '../actions/types';

const INITIAL_STATE = {
  history: [],
  isStarted: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COUNTDOWN_TOGGLE:
      return { ...state, isStarted: !state.isStarted };
    case COUNTDOWN_HISTORY_ADD:
      return { ...state, history: [...state.history, payload] };
    case COUNTDOWN_HISTORY_REMOVE:
      return { ...state, history: [...state.history].filter((c) => c.id !== payload.id) };
    default:
      return state;
  }
};
