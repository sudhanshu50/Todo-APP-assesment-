/* eslint-disable react/prop-types */
const Input = ({ type, check, changeHandler, value, style }) => {
  return (
    <input
      type={type}
      checked={check}
      onChange={changeHandler}
      value={value}
      placeholder="Enter here..."
      style={style}
    />
  );
};

export default Input;
