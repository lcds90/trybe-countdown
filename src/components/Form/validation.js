const handleInput = (e) => {
  const { target: { value } } = e;
  if (String(value).length >= 2) {
    e.preventDefault();
  }
};

export default handleInput;
