import { Component } from 'react';
import style from './app.module.css';
import { Animation, Countdown } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  render() {
    return (
      <main className={style.app}>
        <section>
          <Animation />
        </section>
        <section className={style.footer}>
          <Countdown />
        </section>
      </main>
    );
  }
}

export default App;
