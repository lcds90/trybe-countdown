import React, { useEffect, useState } from 'react';
import { Form } from '..';
import displayTime from './time';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!timeLeft || !start) return null;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, start]);

  return (
    <article>
      <Form onChange={setTimeLeft} />
      <button type="button" onClick={() => setStart(!start)}>Começar</button>
      {displayTime(timeLeft)}
    </article>
  );
};

export default Countdown;
