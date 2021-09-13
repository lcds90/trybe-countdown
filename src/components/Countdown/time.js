const displayTime = (secs) => {
  const hours = Math.floor(secs / (60 * 60));

  const divisorMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorMinutes / 60);

  const divisorSeconds = divisorMinutes % 60;
  const seconds = Math.ceil(divisorSeconds);

  /*   const obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj; */
  return `${minutes}:${seconds}`;
};

export default displayTime;
