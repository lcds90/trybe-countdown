const displayTime = (secs) => {
  const divisorMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorMinutes / 60);

  const divisorSeconds = divisorMinutes % 60;
  const seconds = Math.ceil(divisorSeconds);

  const showMinutes = minutes.toString().length > 1 ? minutes : `0${minutes}`;
  const showSeconds = seconds.toString().length > 1 ? seconds : `0${seconds}`;

  return `${showMinutes}:${showSeconds}`;
};

export default displayTime;
