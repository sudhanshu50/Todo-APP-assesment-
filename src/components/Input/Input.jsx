const Input = ({ type, check, changeHandler, value }) => {
  return (
    <input
      type={type}
      checked={check}
      onChange={changeHandler}
      value={value}
      placeholder="Enter here..."
    />
  );
};

export default Input;
