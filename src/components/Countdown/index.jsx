import React from 'react';
import secondsToTime from './time';
import { Input } from '..';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.getTimeConverted = this.getTimeConverted.bind(this);
  }

  componentDidMount() {
    const timeLeftVar = secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  async getTimeConverted(newTime) {
    await this.setState({ seconds: newTime, time: secondsToTime(newTime) });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    const seconds = this.state.seconds - 1;
    this.setState({
      time: secondsToTime(seconds),
      seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <Input onSubmit={this.getTimeConverted} />
        <button onClick={this.startTimer}>Start</button>
        m:
        {' '}
        {this.state.time.m}
        {' '}
        s:
        {' '}
        {this.state.time.s}
      </div>
    );
  }
}

export default Countdown;
