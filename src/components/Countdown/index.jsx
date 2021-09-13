import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCountdown } from 'redux/actions';
import { Form } from '..';
import displayTime from './time';
import {
  article, articleStart, button, span,
} from './Countdown.module.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [start, setStart] = useState(false);
  const isStarted = useSelector(({ timer }) => timer.isStarted);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!timeLeft || !start) return null;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, start]);

  const handleStart = () => {
    setStart(!start);
    dispatch(toggleCountdown());
  };

  return (
    <article className={isStarted ? articleStart : article}>
      <span className={span}>
        {displayTime(timeLeft)}
      </span>
      <Form onChange={setTimeLeft} started={start} />
      <button className={button} type="button" onClick={handleStart}>Começar</button>
    </article>
  );
};

export default Countdown;
