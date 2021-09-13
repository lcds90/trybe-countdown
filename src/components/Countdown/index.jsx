import React, { useEffect, useState } from 'react';
import { Form } from '..';
import displayTime from './time';
import { article } from './Countdown.module.css';

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
    <article className={article}>
      <span>
        {displayTime(timeLeft)}
      </span>
      <Form onChange={setTimeLeft} started={start} />
      <button type="button" onClick={() => setStart(!start)}>Começar</button>
    </article>
  );
};

export default Countdown;
