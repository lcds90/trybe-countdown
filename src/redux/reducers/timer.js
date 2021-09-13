import {
  COUNTDOWN_HISTORY_ADD, COUNTDOWN_HISTORY_REMOVE, COUNTDOWN_START, COUNTDOWN_STOP,
} from '../actions/types';

const INITIAL_STATE = {
  history: [],
  isStarted: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COUNTDOWN_START:
      return { ...state, isStarted: true };
    case COUNTDOWN_STOP:
      return { ...state, isStarted: false };
    case COUNTDOWN_HISTORY_ADD:
      return { ...state, history: [...state.history, payload] };
    case COUNTDOWN_HISTORY_REMOVE:
      return { ...state, history: [...state.history].filter((c) => c.id !== payload.id) };
    default:
      return state;
  }
};
