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
    const { state: { time } } = this;
    return (
      <main className={style.app}>
        <section>
          <Animation />
        </section>
        <footer className={style.footer}>
          <Countdown timeSeconds={time} />
          Hello!
        </footer>
      </main>
    );
  }
}

export default App;
