import {
  COUNTDOWN_HISTORY_ADD, COUNTDOWN_HISTORY_REMOVE, COUNTDOWN_START, COUNTDOWN_STOP,
} from './types';

export const startCountdown = () => ({
  type: COUNTDOWN_START,
});

export const stopCountdown = () => ({
  type: COUNTDOWN_STOP,
});

export const addCountdownToHistory = (payload) => ({
  type: COUNTDOWN_HISTORY_ADD,
  payload,
});

export const removeCountdownFromHistory = (payload) => ({
  type: COUNTDOWN_HISTORY_REMOVE,
  payload,
});
