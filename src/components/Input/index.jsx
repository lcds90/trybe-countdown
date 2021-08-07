import { Component } from 'react';
import handleInput from './validation';

export class Input extends Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      seconds: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState((state) => (
      value.length <= 2
    && { [name]: value }) || state[name],
    () => {
      const { minutes, seconds } = this.state;
      const { onSubmit } = this.props;
      const timeSeconds = Number(seconds) + (Number(minutes) * 60);
      onSubmit(timeSeconds);
    });
  }

  render() {
    const { handleChange } = this;
    return (
      <section>
        <label htmlFor="minutes">
          <input
            type="number"
            name="minutes"
            id="minutes"
            max="60"
            min="0"
            onChange={handleChange}
            onKeyPress={handleInput}
          />
        </label>
        <label htmlFor="seconds">
          <input
            type="number"
            name="seconds"
            id="seconds"
            max="60"
            min="0"
            pattern="\d*"
            onChange={handleChange}
            onKeyPress={handleInput}
          />
        </label>
      </section>
    );
  }
}

export default Input;
