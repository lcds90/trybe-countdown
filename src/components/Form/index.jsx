import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { label } from './Form.module.css';

const Form = ({ onChange, started }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleInput = (event) => {
    const { target: { value } } = event;
    return (String(value).length >= 2 ? event.preventDefault() : null);
  };

  useEffect(() => {
    const timeSeconds = Number(seconds) + (Number(minutes) * 60);
    if (!started) onChange(timeSeconds);
  });

  return (
    <>
      <label htmlFor="minutes" className={label}>
        <input
          type="number"
          name="minutes"
          id="minutes"
          max="59"
          placeholder="Minutos"
          min="0"
          onChange={({ target: { value } }) => setMinutes(value)}
          onKeyPress={handleInput}
        />
      </label>
      <label htmlFor="seconds" className={label}>
        <input
          type="number"
          name="seconds"
          id="seconds"
          placeholder="Segundos"
          max="60"
          min="0"
          pattern="\d*"
          onChange={({ target: { value } }) => setSeconds(value)}
          onKeyPress={handleInput}
        />
      </label>
    </>
  );
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Form;
