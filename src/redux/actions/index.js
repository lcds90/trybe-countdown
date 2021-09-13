import {
  COUNTDOWN_HISTORY_ADD, COUNTDOWN_HISTORY_REMOVE, COUNTDOWN_TOGGLE,
} from './types';

export const toggleCountdown = () => ({
  type: COUNTDOWN_TOGGLE,
});

export const addCountdownToHistory = (payload) => ({
  type: COUNTDOWN_HISTORY_ADD,
  payload,
});

export const removeCountdownFromHistory = (payload) => ({
  type: COUNTDOWN_HISTORY_REMOVE,
  payload,
});
