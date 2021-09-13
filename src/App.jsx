import React from 'react';
import style from './app.module.css';
import { Animation, Countdown } from './components';

export default () => (
  <main className={style.app}>
    <section className={style.animation}>
      <Animation />
    </section>
    <section className={style.countdown}>
      <Countdown />
    </section>
    <footer>
      Feito por Leonardo Santos
    </footer>
  </main>
);
