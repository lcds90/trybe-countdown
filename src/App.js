import React from 'react';
import { useSelector } from 'react-redux';
import {
  animation, app, countdownInitial, countdownStarted,
} from './app.module.css';
import { Animation, Countdown } from './components';

export default () => {
  const isStarted = useSelector(({ timer }) => timer.isStarted);
  return (
    <main className={app}>
      <section className={animation}>
        {isStarted && <Animation />}
      </section>
      <section className={isStarted ? countdownStarted : countdownInitial}>
        <Countdown />
      </section>
      <footer>
        Feito por Leonardo Santos
      </footer>
    </main>
  );
};
