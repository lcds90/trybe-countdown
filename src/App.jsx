import { Component } from 'react';
import style from './app.module.css';
import { Countdown } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  render() {
    const { state: { time }, getTimeConverted } = this;
    return (
      <div className={style.App}>
        <main>
          <Countdown timeSeconds={time} />
        </main>
        <footer className={style.AppHeader}>
          Hello!
        </footer>
      </div>
    );
  }
}

export default App;
